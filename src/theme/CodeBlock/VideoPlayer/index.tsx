import React, { ReactNode } from 'react'

import './index.css'

export interface Props {
  url: string
  children?: ReactNode
}

function VideoPlayer({ url, children }: Props) {

  return (
    <div className="dbk-video-wrapper">
      <div className="dbk-video-container">
        VIDEO
        <video src={url} />
      </div>
      {children}
    </div>
  )
}

export default VideoPlayer
