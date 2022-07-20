import React, {
} from 'react'

import './index.css'

export interface Props {
  url: string
  onClose?: () => void
}

function VideoModal({ url, onClose }: Props) {
  return (
    <div className="dbk-video-modal">
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
