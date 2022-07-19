import React from 'react';
import CodeBlock, { type Props } from '@theme-init/CodeBlock';

import './index.css'

export default function CodeBlockWrapper(props: Props) {
  return (
    <>
      <div className="dbk">
        DEVBOOK PLUGIN2
      </div>
      <div className="dbk">
        {props.video}
      </div>
      <CodeBlock {...props} />
    </>
  );
}
