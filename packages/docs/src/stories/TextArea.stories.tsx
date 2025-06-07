import { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps, theme } from '@abqm-ds/react';

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
} as Meta<TextAreaProps>;

const render = (args: TextAreaProps) => (
  <Box
    as="label"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.space[2],
    }}
  >
    <>
      <Text fontSize="sm">Observações</Text>
      <TextArea {...args} />
    </>
  </Box>
);

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Adicione algumas observações',
  },
  render,
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
  render,
};
