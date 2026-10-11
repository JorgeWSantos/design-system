import { Meta, StoryObj } from '@storybook/react';
import { CreatorTableData, CreatorTableDataContainerTypeProps } from '@abqm-ds/react';

export default {
  title: 'Data Display/CreatorTableData',
  component: CreatorTableData,
  args: {
    value: 'HARAS EXEMPLO',
    isHallOfFameCreator: null,
    legacyYear: null,
    bolder: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: `
O **CreatorTableData** exibe o nome do criador na tabela, com os destaques de premiação.

### Como implementar

\`\`\`tsx
import { CreatorTableData } from '@abqm-ds/react';

<CreatorTableData
  value={item.cds_nome}
  isHallOfFameCreator={item.hall_da_fama}
  legacyYear={item.ano_premiacao_legacy}
  onClick={...}
/>
\`\`\`

- \`isHallOfFameCreator\` (ano): nome em destaque, medalha e "HALL DA FAMA {ano}".
- \`legacyYear\` (opcional): brasão Legacy e "LEGACY {ano}". Com os dois, a linha fica "HALL DA FAMA {ano} ● LEGACY {ano}".
        `,
      },
    },
  },
} as Meta<CreatorTableDataContainerTypeProps>;

export const Primary: StoryObj<CreatorTableDataContainerTypeProps> = {};

export const HallOfFame: StoryObj<CreatorTableDataContainerTypeProps> = {
  args: {
    isHallOfFameCreator: '2019',
  },
};

export const Legacy: StoryObj<CreatorTableDataContainerTypeProps> = {
  args: {
    legacyYear: 2021,
  },
};

export const HallOfFameAndLegacy: StoryObj<CreatorTableDataContainerTypeProps> = {
  args: {
    isHallOfFameCreator: '2019',
    legacyYear: 2021,
  },
};
