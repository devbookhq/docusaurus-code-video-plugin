import { readDefaultCodeTranslationMessages } from '@docusaurus/theme-translations'
import type {
  LoadContext,
  Plugin,
} from '@docusaurus/types'

export default function themeLiveCodeblock(context: LoadContext): Plugin {
  const {
    i18n: { currentLocale },
  } = context;

  return {
    name: '@devbookhq/docusaurus-plugin',

    getThemePath() {
      return '../lib/theme';
    },
    getTypeScriptThemePath() {
      return '../src/theme';
    },

    getDefaultCodeTranslationMessages() {
      return readDefaultCodeTranslationMessages({
        locale: currentLocale,
        name: '@devbookhq/docusaurus-plugin',
      });
    },

    configureWebpack() {
      return {
        resolve: {
          alias: {
            buble: require.resolve('./custom-buble.js'),
          },
        },
      };
    },
  };
}

export { validateThemeConfig } from './validateThemeConfig'