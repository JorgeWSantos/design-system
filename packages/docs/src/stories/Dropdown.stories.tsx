import { Meta, StoryObj } from '@storybook/react';
import { Box, Dropdown, DropdownProps, DataDropdown } from '@abqm-ui2/react';
import { radii, space } from '@abqm-ui2/tokens';

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
} as Meta<DropdownProps>;

const defaultData: DataDropdown[] = [
  { value: 'Minas Gerais', label: 'Minas Gerais', id: '1' },
  { value: 'São Paulo', label: 'São Paulo', id: '2' },
  { value: 'Rj', label: 'Rj', id: '3' },
];

const render = (args: DropdownProps) => (
  <Box
    as="label"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: space[2],
      width: '320px',
      padding: space[6],
      borderRadius: radii.md,
    }}
  >
    <Dropdown {...args} />
  </Box>
);

export const Primary: StoryObj<DropdownProps> = {
  args: {
    label: 'Ufs',
    data: defaultData,
  },
  render,
};
