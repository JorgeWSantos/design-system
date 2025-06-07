import * as Icons from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

// Filtra apenas ícones que são logos
const logoNames = Object.keys(Icons).filter(
  (name) => name.endsWith('Icon') && name.toLowerCase().includes('logo')
);

const LogosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  padding: 24px;
  background-color: ${colors.white25};
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  font-size: 12px;
`;

const LogoLabel = styled.span`
  margin-top: 8px;
  text-align: center;
  word-break: break-all;
  color: ${colors.white};
`;

const StyledLogo = styled.svg`
  /* path {
    fill: ${colors.white};
  } */
`;

export default {
  title: 'Icons/Logos',
  parameters: {
    docs: {
      description: {
        component: `
Exibe todos os logos disponíveis em \`@abqm-ds/icons\` de forma genérica.

Cada logo pode receber props como \`width\`, \`height\` etc.
        `,
      },
    },
  },
} as Meta;

export const AllLogos: StoryObj = {
  render: () => (
    <LogosGrid>
      {logoNames.map((logoName) => {
        const Logo = (Icons as any)[logoName];
        return (
          <LogoBox key={logoName}>
            <StyledLogo as={Logo} width={80} height={80} />
            <LogoLabel>{logoName}</LogoLabel>
          </LogoBox>
        );
      })}
    </LogosGrid>
  ),
};
