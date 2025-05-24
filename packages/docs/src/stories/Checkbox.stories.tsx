import { Meta, StoryObj } from '@storybook/react';
import { Box, Checkbox, CheckboxProps, Text, theme } from '@abqm-ui2/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
} as Meta<CheckboxProps>;

const render = (args: CheckboxProps) => (
  <Box
    as="label"
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: theme.space[2],
    }}
  >
    <>
      <Checkbox {...args} />
      <Text fontSize="sm">Aceito os termos de uso</Text>
    </>
  </Box>
);

export const Primary: StoryObj<CheckboxProps> = {
  render,
};
