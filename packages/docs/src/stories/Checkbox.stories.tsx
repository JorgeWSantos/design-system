import { Meta, StoryObj } from '@storybook/react';
import { Box, Checkbox, CheckboxProps, Text } from '@abqm-ds/react';
import { space } from '@abqm-ds/tokens';

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
      gap: space[2],
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
