import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { GlobalStyle } from '@abqm-ui2/react';
import theme from './theme';

// decorators: [withResponsiveBackground],

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
  parameters: {
    backgrounds: {
      default: theme,
      values: [
        {
          name: 'dark',
          value: themes.dark.appBg, // Use a dark color from the theme
        },
        {
          name: 'light',
          value: themes.light.appBg, // Optional: Add a light option too
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
      theme: themes[theme],
    },
  },
};

export default preview;
