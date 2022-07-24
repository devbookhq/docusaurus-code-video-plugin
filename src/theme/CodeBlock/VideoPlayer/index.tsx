import React, {
  ReactNode,
  useEffect,
  useState,
} from 'react'

import './index.css'

import VideoModal from './VideoModal'

const button = {
  marginBottom: '8px',
  backgroundColor: '#0ac069',
  color: 'white',
  fontSize: '14px',
  fontWeight: '600',
  padding: '8px 12px',
  borderRadius: '8px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
}

export interface Props {
  url: string
  playButtonText?: string
  children?: ReactNode
}

let closePreviousModal: (() => void) | undefined

function VideoPlayer({
  url,
  playButtonText,
  children,
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
    <div className="dbk-video-wrapper">
      <div className="dbk-video-container">
        <button
          onClick={openModal}
          style={button}
        >
          {playButtonText || 'Play'}
        </button>
      </div>
      {children}
      {isOpen && <VideoModal url={url} onClose={closeModal} />}
    </div>
  )
}

export default VideoPlayer
