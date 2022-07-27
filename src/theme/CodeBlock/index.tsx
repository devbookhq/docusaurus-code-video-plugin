import React from 'react'
import CodeBlock, { type Props } from '@theme-init/CodeBlock'

import VideoPlayer from './VideoPlayer'
import useVideoHighlight from './useVideoHighlight'

function CodeBlockWrapper(props: Props) {
  const {
    metastring,
    handleTimeChange,
  } = useVideoHighlight(props)

  if (props.youtubeID) {
    return (
      <VideoPlayer
        youtubeID={props.youtubeID}
        onTimeChange={handleTimeChange}
      >
        <CodeBlock {...props} metastring={metastring} />
      </VideoPlayer>
    )
  } else {
    return <CodeBlock {...props} />
  }
}

export default CodeBlockWrapper
