import { Meta, StoryObj } from '@storybook/react';
import { LegacyBadge, LegacyBadgeProps } from '@abqm-ds/react';

export default {
  title: 'Data Display/LegacyBadge',
  component: LegacyBadge,
  args: {
    year: 2021,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: `
O **LegacyBadge** exibe o brasão do prêmio **Legacy** do criador (Quarto de Milha Legacy).

### Como implementar

\`\`\`tsx
import { LegacyBadge } from '@abqm-ds/react';

<LegacyBadge year={2021} />
\`\`\`

- \`year\` aparece no tooltip ("Legacy 2021") e no texto alternativo.
- \`size\` define largura e altura (padrão \`1.125rem\`).
- \`withTooltip\` (padrão \`true\`) mostra "Legacy {ano}" ao passar o mouse ou tocar; \`tooltipPlacement\` abre embaixo (\`'bottom'\`, padrão) ou em cima (\`'top'\`).
- Na tabela de criadores, use a prop \`legacyYear\` do \`CreatorTableData\`, que já aplica o brasão e o texto.
        `,
      },
    },
  },
} as Meta<LegacyBadgeProps>;

export const Primary: StoryObj<LegacyBadgeProps> = {};

export const Large: StoryObj<LegacyBadgeProps> = {
  args: {
    size: '2.5rem',
  },
};

export const WithoutTooltip: StoryObj<LegacyBadgeProps> = {
  args: {
    withTooltip: false,
  },
};
