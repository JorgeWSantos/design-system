import { Meta, StoryObj } from '@storybook/react';
import { Box, MultiStep, MultiStepProps, theme } from '@abqm-ds/react';

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  parameters: {
    docs: {
      description: {
        component: `
O componente **MultiStep** exibe um indicador de progresso para formulários multi-etapas.

### Como implementar

\`\`\`tsx
import { MultiStep } from '@abqm-ds/react';

<MultiStep size={4} currentStep={2} />
\`\`\`

- \`size\`: total de etapas.
- \`currentStep\`: etapa atual (opcional, padrão 1).
        `,
      },
    },
  },
  // not show the complete element
  // decorators: [
  //   (Story) => {
  //     return (
  //       <Box
  //         as="label"
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //           gap: theme.space[2],
  //         }}
  //       >
  //         {Story()}
  //       </Box>
  //     )
  //   },
  // ],
} as Meta<MultiStepProps>;

const render = (args: MultiStepProps) => (
  <Box
    as="label"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.space[2],
    }}
  >
    <MultiStep {...args} />
  </Box>
);

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
  render,
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    size: 4,
  },
  render,
};
