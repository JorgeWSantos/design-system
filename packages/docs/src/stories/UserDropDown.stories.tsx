import { Meta, StoryObj } from '@storybook/react';
import { UserDropDown, UserDropDownProps } from '@abqm-ds/react';

export default {
  title: 'Data Display/UserDropdown',
  component: UserDropDown,
  parameters: {
    docs: {
      description: {
        component: `
O componente **UserDropdown** exibe um menu suspenso para ações do usuário.

### Como implementar

\`\`\`tsx
import { UserDropdown } from '@abqm-ds/react';

<UserDropDown srcImage="https://github.com/jorgewsantos.png" userName="Jorge Santos" />
\`\`\`

- Exibe nome e avatar do usuário.
- Mostra opções ao clicar.
        `,
      },
    },
  },
} as Meta<UserDropDownProps>;

export const Primary: StoryObj<UserDropDownProps> = {};
