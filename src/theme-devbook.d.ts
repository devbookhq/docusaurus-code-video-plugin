/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/// <reference types="@docusaurus/theme-classic" />
/// <reference types="@docusaurus/module-type-aliases" />

declare module '@docusaurus/theme-devbook-codeblock' {
  export type ThemeConfig = {
    liveCodeBlock: {
      playgroundPosition: 'top' | 'bottom';
    };
  };
}

declare module '@theme/DevbookCodeBlock' {
  import type { Props as BaseProps } from '@theme/CodeBlock';

  export default function DevbookCodeBlock(props: LiveProviderProps): JSX.Element;
}
