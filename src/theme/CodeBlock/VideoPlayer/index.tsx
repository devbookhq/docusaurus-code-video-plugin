import React, {
  ReactNode,
  useEffect,
  useState,
} from 'react'

import './index.css'
import VideoModal from './VideoModal'

export interface Props {
  url: string
  children?: ReactNode
}

let closePreviousModal: (() => void) | undefined

function VideoPlayer({ url, children }: Props) {
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
    <div className="dbk-video-wrapper">
      <div className="dbk-video-container">
        <div
          className="dbk-video-play"
          onClick={openModal}
        >
          Play
        </div>
      </div>
      {children}
      {isOpen && <VideoModal url={url} onClose={closeModal} />}
    </div>
  )
}

export default VideoPlayer
