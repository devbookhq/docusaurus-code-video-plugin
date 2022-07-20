import React, {
} from 'react'

import './index.css'

export interface Props {
  url: string
  onClose?: () => void
}

const modal = {
  position: 'fixed',
  right: '24px',
  bottom: '24px',
  width: '600px',
  height: '300px',
  zIndex: 100,
  backgroundColor: 'black',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
} as React.CSSProperties

function VideoModal({ url, onClose }: Props) {
  return (
    <div className="dbk-video-modal" style={modal}>
      <div className="dbk-video-modal-header">
        <div className="dbk-video-modal-close" onClick={onClose}>x</div>
      </div>
      <iframe
        src={url}
        width="100%"
        height="90%"
        style={{ borderRadius: '0.5em' }}
        frameBorder={0}
        allowFullScreen={true}
      />
    </div>
  )
}

export default VideoModal
