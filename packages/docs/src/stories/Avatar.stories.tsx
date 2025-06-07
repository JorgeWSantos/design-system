import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@abqm-ds/react';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/jorgewsantos.png',
    alt: 'Jorge W Santos',
  },
  argTypes: {
    src: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
O componente **Avatar** exibe a foto do usuário ou um fallback.

### Como implementar

\`\`\`tsx
import { Avatar } from '@abqm-ds/react';

<Avatar src="https://github.com/jorgewsantos.png" alt="Jorge W Santos" />
\`\`\`

- Exibe imagem se \`src\` for fornecido.
- Exibe fallback (letra) se não houver imagem.
        `,
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
};
