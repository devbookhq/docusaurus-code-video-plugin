import React, {
  ReactNode,
  useEffect,
  useState,
} from 'react'
import PlayButton from './PlayButton'

import styles from './styles.module.css'

import VideoModal from './VideoModal'

export interface Props {
  url: string
  playButtonOverlay?: boolean
  playButtonText?: string
  children?: ReactNode
}

let closePreviousModal: (() => void) | undefined

function VideoPlayer({
  url,
  playButtonText,
  children,
  playButtonOverlay,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    closePreviousModal?.()

    closePreviousModal = () => {
      setIsOpen(false)
      closePreviousModal = undefined
    }

    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(function cleanup() {
    return () => {
      closePreviousModal?.()
    }
  }, [])

  return (
    <div className={styles['dbk-video-wrapper']}>
      {playButtonOverlay &&
        <div className={styles['dbk-video-container']}>
          <PlayButton
            onOpen={openModal}
            buttonText={playButtonText}
          />
        </div>
      }
      {!playButtonOverlay &&
        <PlayButton
          onOpen={openModal}
          buttonText={playButtonText}
        />
      }
      {children}
      {isOpen && <VideoModal url={url} onClose={closeModal} />}
    </div>
  )
}

export default VideoPlayer
