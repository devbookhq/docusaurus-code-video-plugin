import React, {
  useCallback,
  useEffect,
  useRef,
  useLayoutEffect,
  useState,
} from 'react'
import Draggable, {
  DraggableEventHandler,
} from 'react-draggable'
import CloseIcon from './CloseIcon'
import YouTube, {
  YouTubePlayer,
} from 'react-youtube'

import styles from './styles.module.css'
import usePosition from './usePosition'

export interface Props {
  youtubeID: string
  onClose?: () => void
  // `time` is in seconds since since video start.
  // This function should be a stable reference
  onTimeChange?: (time: number) => void
}

function VideoModal({
  youtubeID,
  onClose,
  onTimeChange,
}: Props) {
  const [isDragged, setIsDragged] = useState(false)
  const [player, setPlayer] = useState<YouTubePlayer>()

  const yRef = useRef<YouTube>(null)
  const draggableContainerRef = useRef<HTMLDivElement>(null)

  const {
    changePosition,
    position,
  } = usePosition()

  useEffect(function checkTime() {
    if (!player) return
    if (!onTimeChange) return

    const interval = setInterval(() => {
      const time = player.getCurrentTime()
      onTimeChange(time)
    }, 400)

    return () => {
      clearInterval(interval)
    }
  }, [
    player,
    onTimeChange,
  ])

  useLayoutEffect(() => {
    if (!draggableContainerRef.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return
      if (!entry.isIntersecting) {
        changePosition({ x: 0, y: 0 })
      }
    })

    observer.observe(draggableContainerRef.current)
    return () => {
      observer.disconnect()
    }
  }, [
    position,
    changePosition,
    draggableContainerRef,
  ])

  const stopDragging = useCallback<DraggableEventHandler>((_, data) => {
    setIsDragged(false)

    changePosition({
      x: data.x,
      y: data.y,
    })
  }, [])

  return (
    <>
      {position &&
        <Draggable
          nodeRef={draggableContainerRef}
          onStart={() => setIsDragged(true)}
          onStop={stopDragging}
          position={position}
        >
          <div
            className={styles['modal']}
            ref={draggableContainerRef}
          >
            <div className={styles['modal-header']}>
              <div className={styles['modal-close']} onClick={onClose}>
                <CloseIcon />
              </div>
            </div>
            <YouTube
              ref={yRef}
              style={{ pointerEvents: isDragged ? 'none' : 'auto' }}
              iframeClassName={styles['iframe']}
              onReady={(event) => setPlayer(event.target)}
              videoId={youtubeID}
              opts={{
                host: 'https://www.youtube-nocookie.com',
                width: '100%',
                height: '100%',
                playerVars: {
                  modestbranding: 1,
                  controls: 1,
                  autoplay: 1,
                  showinfo: 0,
                  fs: 0,
                  rel: 0,
                  iv_load_policy: 3,
                  cc_load_policy: 1,
                },
              }}
            />
          </div>
        </Draggable>
      }
    </>
  )
}

export default VideoModal
