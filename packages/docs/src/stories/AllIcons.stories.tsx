import * as Icons from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

// Filtra apenas ícones que NÃO são logos
const iconNames = Object.keys(Icons).filter(
  (name) => name.endsWith('Icon') && !name.toLowerCase().includes('logo')
);

const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  padding: 24px;
  background-color: ${colors.white25};
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  font-size: 12px;
`;

const IconLabel = styled.span`
  margin-top: 8px;
  text-align: center;
  word-break: break-all;
  color: ${colors.white};
`;

const StyledIcon = styled.svg`
  path {
    fill: ${colors.white};
  }
`;

export default {
  title: 'Icons/Todos',
  parameters: {
    docs: {
      description: {
        component: `
Exibe todos os ícones (exceto logos) disponíveis em \`@abqm-ds/icons\` de forma genérica.

Cada ícone pode receber props como \`width\`, \`height\` etc.

Para mudar a cor do ícone, utilize styled-components:

\`\`\`tsx
import styled from 'styled-components';
import { NameIcon } from '@abqm-ds/icons';

const RedIcon = styled(NameIcon)\`
  path { fill: white; }
\`;

<RedIcon width={32} height={32} />
\`\`\`
        `,
      },
    },
  },
} as Meta;

export const AllIcons: StoryObj = {
  render: () => (
    <IconsGrid>
      {iconNames.map((iconName) => {
        const Icon = (Icons as any)[iconName];
        return (
          <IconBox key={iconName}>
            <StyledIcon as={Icon} width={40} height={40} />
            <IconLabel>{iconName}</IconLabel>
          </IconBox>
        );
      })}
    </IconsGrid>
  ),
};
