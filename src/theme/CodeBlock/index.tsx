import React from 'react';
import CodeBlock, { type Props } from '@theme-init/CodeBlock';

import VideoPlayer from './VideoPlayer';

function CodeBlockWrapper(props: Props) {
  if (props.video) {
    return (
      <VideoPlayer url={props.video} playButtonText={props.playButtonText}>
        <CodeBlock {...props} />
      </VideoPlayer>
    )
  } else {
    return <CodeBlock {...props} />
  }
}

export default CodeBlockWrapper
