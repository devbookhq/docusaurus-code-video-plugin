import React from 'react';
import CodeBlock, { type Props } from '@theme-init/CodeBlock';

import './index.css'

export default function CodeBlockWrapper(props: Props) {
  return (
    <>
      <div className="dbk">
        DEVBOOK PLUGINmxd
      </div>
      <CodeBlock {...props} />
    </>
  );
}
