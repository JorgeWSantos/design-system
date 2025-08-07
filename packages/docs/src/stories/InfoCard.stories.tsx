import { Meta, StoryObj } from '@storybook/react';
import { InfoCard, InfoCardProps } from '@abqm-ds/react';

export default {
  title: 'Data Display/InfoCard',
  component: InfoCard,
  parameters: {
    docs: {
      description: {
        component: `
O componente **InfoCard** exibe um cartão de informações com título e subtítulo opcionais.

### Como implementar

\`\`\`tsx
import { InfoCard } from '@abqm-ds/react';

<InfoCard title="Título" subTitle="Subtítulo" />
\`\`\`

- \`title\`: string — Título do cartão (opcional)
- \`subTitle\`: string — Subtítulo do cartão (opcional)
- \`style\`: CSSProperties — Estilização inline opcional
- \`reverse\`: boolean — Inverte a ordem do título e subtítulo
- Aceita outras props do ContainerInfoCard
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subTitle: { control: 'text' },
    style: { control: 'object' },
  },
} as Meta<InfoCardProps>;

const render = (args: any) => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <InfoCard {...args} />
      <InfoCard {...args} />
    </div>
  );
};

export const Primary: StoryObj<InfoCardProps> = {
  args: {
    title: '4',
    subTitle: 'Oficiais',
  },
};

export const Reverse: StoryObj<InfoCardProps> = {
  args: {
    title: '4',
    subTitle: 'Oficiais',
    reverse: true,
  },
};

export const With2: StoryObj<InfoCardProps> = {
  args: {
    title: '4',
    subTitle: 'Oficiais',
  },
  render: render,
};
