import React, { useMemo, ReactNode, isValidElement, useState } from 'react'
import CodeBlock, { type Props } from '@theme-init/CodeBlock'

import VideoPlayer from './VideoPlayer'
import useVideoHighlight from './useVideoHighlight'


function clearCodeChildren(children: ReactNode): ReactNode {
  if (React.Children.toArray(children).some((el) => isValidElement(el))) {
    return children
  }

  // The children is now guaranteed to be one/more plain strings
  const code = Array.isArray(children) ? children.join('') : (children as string)
  return code.replace(/(?:^|\r?\n)(?:highlight-next-line|highlight-start|highlight-end)*?(?=$|\r?\n)/g, '');
}

function CodeBlockWrapper(props: Props) {
  const {
    metastring,
    handleTimeChange,
    hasHighlight,
  } = useVideoHighlight(props)
  const [isOpen, setIsOpen] = useState(false)

  const cleanedCode = useMemo(() => {
    if (hasHighlight) {
      return clearCodeChildren(props.children)
    }
    return props.children
  }, [
    hasHighlight,
    props,
  ])

  if (props.youtubeID) {
    return (
      <VideoPlayer
        youtubeID={props.youtubeID}
        onTimeChange={handleTimeChange}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <CodeBlock {...props} metastring={metastring}>{isOpen ? cleanedCode : props.children}</CodeBlock>
      </VideoPlayer>
    )
  } else {
    return <CodeBlock {...props} />
  }
}

export default CodeBlockWrapper
