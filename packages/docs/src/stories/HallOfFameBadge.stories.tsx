import { Meta, StoryObj } from '@storybook/react';
import { HallOfFameBadge, HallOfFameBadgeProps } from '@abqm-ds/react';

export default {
  title: 'Data Display/HallOfFameBadge',
  component: HallOfFameBadge,
  args: {
    year: 2019,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: `
O **HallOfFameBadge** exibe a medalha do **Hall da Fama** (criador ou proprietário).

### Como implementar

\`\`\`tsx
import { HallOfFameBadge } from '@abqm-ds/react';

<HallOfFameBadge year={2019} />
\`\`\`

- \`year\` aparece no tooltip ("Hall da Fama 2019") e no texto alternativo.
- \`size\` define largura e altura (padrão \`1.125rem\`).
- \`withTooltip\` (padrão \`true\`) faz a medalha brilhar e mostra "Hall da Fama {ano}" ao passar o mouse ou tocar; \`tooltipPlacement\` abre embaixo (\`'bottom'\`, padrão) ou em cima (\`'top'\`).
- Combina com o \`LegacyBadge\`, por exemplo no \`titleSuffix\` do \`HeaderNavigatorDesktop\`.
        `,
      },
    },
  },
} as Meta<HallOfFameBadgeProps>;

export const Primary: StoryObj<HallOfFameBadgeProps> = {};

export const Large: StoryObj<HallOfFameBadgeProps> = {
  args: {
    size: '1.75rem',
  },
};
