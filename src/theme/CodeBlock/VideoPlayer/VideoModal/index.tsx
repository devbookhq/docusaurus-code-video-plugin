import React, {
  IframeHTMLAttributes,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import Draggable from 'react-draggable'
import CloseIcon from './CloseIcon'
// https://github.com/cookpete/react-player/blob/master/src/players/YouTube.js
import YouTube, { YouTubePlayer } from 'react-youtube'

import styles from './styles.module.css'

export interface Props {
  url: string
  onClose?: () => void
}

function VideoModal({ url, onClose }: Props) {
  const draggableContainerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isDragged, setIsDragged] = useState(false)

  const yRef = useRef<YouTube>(null)
  const [isPlaying, setIsPlaying] = useState(false)


  useEffect(function checkTime() {
    if (!isPlaying) return

    const player = yRef.current?.getInternalPlayer()
    const interval = setInterval(() => {

    }, 800)

    return () => {
      clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <Draggable
      nodeRef={draggableContainerRef}
      onStart={() => setIsDragged(true)}
      onStop={() => setIsDragged(false)}
    >
      <div
        className={styles['dbk-video-modal']}
        ref={draggableContainerRef}
      >
        <div className={styles['dbk-video-modal-header']}>
          <div className={styles['dbk-video-modal-close']} onClick={onClose}>
            <CloseIcon></CloseIcon>
          </div>
        </div>
        <YouTube
          ref={yRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          style={{ pointerEvents: isDragged ? 'none' : 'auto' }}
          className={styles['dbk-video-iframe']}
          opts={{

          }}
        />
        {/* <iframe
          style={{ pointerEvents: isDragged ? 'none' : 'auto' }}
          ref={iframeRef}
          src={url + '?autoplay=1'}
          allow="autoplay;"
          className={styles['dbk-video-iframe']}
          frameBorder={0}
          allowFullScreen={true}
        /> */}
      </div>
    </Draggable>
  )
}

export default VideoModal
