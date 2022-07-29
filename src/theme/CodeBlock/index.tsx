import React, {
  useState,
} from 'react'
import CodeBlock, {
  type Props,
} from '@theme-init/CodeBlock'

import VideoPlayer from './VideoPlayer'
import useVideoHighlight from './useVideoHighlight'

function CodeBlockWrapper(props: Props) {
  const {
    metastring,
    handleTimeChange,
    children: highlightChildren,
  } = useVideoHighlight(props)
  const [isOpen, setIsOpen] = useState(false)

  if (props.youtubeID) {
    const newProps = {
      ...props,
      children: isOpen ? highlightChildren : props.children,
    }

    return (
      <VideoPlayer
        youtubeID={props.youtubeID}
        onTimeChange={handleTimeChange}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <CodeBlock {...newProps} metastring={metastring} />
      </VideoPlayer>
    )
  } else {
    return <CodeBlock {...props} />
  }
}

export default CodeBlockWrapper
