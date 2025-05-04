import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
// import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: themes.dark.appBg // Use a dark color from the theme
        },
        {
          name: 'light',
          value: themes.light.appBg // Optional: Add a light option too
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    }
  },
};

export default preview;

