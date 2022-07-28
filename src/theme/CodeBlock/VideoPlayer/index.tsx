import React, {
  ReactNode,
  useEffect,
  useState,
} from 'react'

import styles from './styles.module.css'

import PlayButton from './PlayButton'
import VideoModal from './VideoModal'

export interface Props {
  youtubeID: string
  onTimeChange?: (time: number) => void
  children?: ReactNode
  onOpen?: () => void
  onClose?: () => void
}

let closePreviousModal: (() => void) | undefined

function VideoPlayer({
  youtubeID,
  children,
  onTimeChange,
  onOpen,
  onClose,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    closePreviousModal?.()

    closePreviousModal = () => {
      closeModal()
      closePreviousModal = undefined
    }

    setIsOpen(true)
    onOpen?.()
  }

  function closeModal() {
    setIsOpen(false)
    onClose?.()
  }

  useEffect(function cleanup() {
    return () => {
      closePreviousModal?.()
    }
  }, [])

  return (
    <div className={styles['video-wrapper']}>
      <div className={styles['video-container']}>
        <PlayButton
          youtubeID={youtubeID}
          onOpen={openModal}
          onClose={closeModal}
          isPlaying={isOpen}
        />
      </div>
      {children}
      {isOpen &&
        <VideoModal
          onTimeChange={onTimeChange}
          youtubeID={youtubeID}
          onClose={closeModal}
        />
      }
    </div>
  )
}

export default VideoPlayer
