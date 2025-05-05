import type { StorybookConfig } from '@storybook/react-vite';

import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  // "addons": [
  //   '@storybook/addon-essentials',
  //   '@storybook/addon-onboarding',
  //   '@chromatic-com/storybook',
  //   "@storybook/experimental-addon-test"
  // ],
  "addons": [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath("@storybook/experimental-addon-test")
  ],
  // "framework": {
  //   "name": '@storybook/react-vite',
  //   "options": {}
  // },
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  },
  docs: {
    autodocs: true, // Or true, enables autodocs for non-MDX stories
  },
};
export default config;