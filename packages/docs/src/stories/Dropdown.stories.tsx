import { Meta, StoryObj } from '@storybook/react';
import { Box, Dropdown, DropdownProps } from '@abqm-ds/react';
import { colors, radii, space } from '@abqm-ds/tokens';
import { optionsStates } from './mockedData/dropdownOption';

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
O componente **Dropdown** exibe uma lista suspensa de opções.

### Como implementar

\`\`\`tsx
import { Dropdown } from '@abqm-ds/react';

const data = [
  { value: '1', label: 'Opção 1', id: '1' },
  { value: '2', label: 'Opção 2', id: '2' },
];

<Dropdown data={data} label="Selecione uma opção" />
\`\`\`

- Recebe um array de objetos com \`value\`, \`label\` e \`id\`.
        `,
      },
    },
  },
} as Meta<DropdownProps>;

const render = (args: DropdownProps) => (
  <Box
    as="label"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: space[2],
      width: '320px',
      height: '300px',
      padding: space[6],
      borderRadius: radii.md,
      backgroundColor: colors.green700,
    }}
  >
    <Dropdown {...args} />
  </Box>
);

export const Primary: StoryObj<DropdownProps> = {
  args: {
    label: 'Estados',
    data: optionsStates,
    variant: 'primary',
    maxHeight: '200px',
  },
  render,
};

export const Secondary: StoryObj<DropdownProps> = {
  args: {
    label: 'Estados',
    data: optionsStates,
    variant: 'secondary',
  },
  render,
};

export const Tertiary: StoryObj<DropdownProps> = {
  args: {
    label: 'Estados',
    data: optionsStates,
    variant: 'tertiary',
  },
  render,
};

export const Quaternary: StoryObj<DropdownProps> = {
  args: {
    label: 'Estados',
    data: optionsStates,
    variant: 'quaternary',
  },
  render,
};

export const TertiaryWithoutLabel: StoryObj<DropdownProps> = {
  args: {
    data: optionsStates,
    variant: 'tertiary',
  },
  render,
};

export const OpenToTop: StoryObj<DropdownProps> = {
  args: {
    label: 'Estados (abre para cima)',
    data: optionsStates,
    variant: 'primary',
    openToTop: true,
    maxHeight: '200px',
  },
  render,
};
