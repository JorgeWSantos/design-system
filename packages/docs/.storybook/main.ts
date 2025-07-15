import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/pages/**/*.mdx', '../src/stories/**/*.stories.tsx'],

  // "addons": [
  //   '@storybook/addon-essentials',
  //   '@storybook/addon-onboarding',
  //   '@chromatic-com/storybook',
  //   "@storybook/experimental-addon-test"
  // ],
  addons: [
    '@storybook/addon-docs',
    // '@storybook/addon-actions',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    // '@storybook/experimental-addon-test',
    '@storybook/addon-a11y',
  ],

  // "framework": {
  //   "name": '@storybook/react-vite',
  //   "options": {}
  // },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/';
    }
    return config;
  },
};
export default config;
