import React, {
  useEffect,
  useRef,
  useState,
} from 'react'
import Draggable from 'react-draggable'
import CloseIcon from './CloseIcon'
import YouTube, { YouTubePlayer } from 'react-youtube'

import styles from './styles.module.css'

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
  const yRef = useRef<YouTube>(null)
  const draggableContainerRef = useRef<HTMLDivElement>(null)

  const [player, setPlayer] = useState<YouTubePlayer>()

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

  return (
    <Draggable
      nodeRef={draggableContainerRef}
      onStart={() => setIsDragged(true)}
      onStop={() => setIsDragged(false)}
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
  )
}

export default VideoModal
