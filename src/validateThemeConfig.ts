import type {
  ThemeConfig,
  ThemeConfigValidationContext,
} from '@docusaurus/types';

export function validateThemeConfig({
  themeConfig,
}: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig {
  return themeConfig;
}