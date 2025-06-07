import { Meta, StoryObj } from '@storybook/react';
import { UserDropdown, UserDropdownProps } from '@abqm-ds/react';

export default {
  title: 'Navigation/UserDropdown',
  component: UserDropdown,
  parameters: {
    docs: {
      description: {
        component: `
O componente **UserDropdown** exibe um menu suspenso para ações do usuário.

### Como implementar

\`\`\`tsx
import { UserDropdown } from '@abqm-ds/react';

<UserDropdown user={{ name: 'Jorge', avatar: 'https://github.com/jorgewsantos.png' }} />
\`\`\`

- Exibe nome e avatar do usuário.
- Mostra opções ao clicar.
        `,
      },
    },
  },
} as Meta<UserDropdownProps>;

export const Primary: StoryObj<UserDropdownProps> = {};
