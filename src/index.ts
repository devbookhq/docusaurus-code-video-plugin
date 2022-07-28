import type { Plugin } from '@docusaurus/types'
import path from 'path'

export default function themeLiveCodeblock(): Plugin {
  return {
    name: 'devbook-video-plugin',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
  };
}
