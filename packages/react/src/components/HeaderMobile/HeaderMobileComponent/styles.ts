import { CaretDownIcon, MenuIcon, XIcon } from '@abqm-ui2/icons';
import { Text } from '@components/Text';
import { colors, space } from '@abqm-ui2/tokens';
import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  display: flex;
  height: 40px;
  align-self: stretch;
  max-height: 40px;
  gap: 0.25rem;
  background-color: ${colors.emeraldGreen25};
  padding: ${space[2]} ${space[4]};
`;

// Labels de título e página
export const DivLabels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-height: 40px;
`;

export const Title = styled(Text).attrs({
  fontSize: 'lgg',
  fontWeight: 'bold',
  lineHeight: 'short',
  color: colors.white85,
})`
  letter-spacing: -0.03563rem;
`;

export const Label = styled(Text).attrs({
  fontSize: 'ssm',
  fontWeight: 'regular',
  lineHeight: 'short',
  color: colors.white75,
})`
  letter-spacing: 0.08125rem;
  margin-top: -0.375rem;
`;

// Container do botão
export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 32px;
  height: 100%;
`;

// Wrapper que contém os dois ícones
export const MenuHamburgueIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

// Ícone de menu hamburguer
export const MenuHamburgueIcon = styled(MenuIcon)<{ menuIsOpen: boolean }>`
  position: absolute;
  top: 10;
  left: 0;
  width: 28px;
  height: 18px;
  border-radius: 2px;
  transform: ${({ menuIsOpen }) => (menuIsOpen ? 'rotate(45deg)' : 'rotate(0)')};
  opacity: ${({ menuIsOpen }) => (menuIsOpen ? 0 : 1)};
  transition: all 0.2s ease-in-out;
`;

// Ícone de fechar (X)
export const CloseMenuIcon = styled(XIcon)<{ menuIsOpen: boolean }>`
  position: absolute;
  top: 10;
  left: 0;

  width: 22px;
  height: 14px;

  transform: ${({ menuIsOpen }) => (menuIsOpen ? 'rotate(90deg)' : 'rotate(0)')};
  opacity: ${({ menuIsOpen }) => (menuIsOpen ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;
export const BackMenuIcon = styled(CaretDownIcon)<{ subMenuIsOpen: boolean }>`
  position: absolute;
  top: 10;
  left: 0;

  width: 20px;
  height: 14px;

  transform: ${({ subMenuIsOpen }) => (subMenuIsOpen ? 'rotate(90deg)' : 'rotate(0)')};
  opacity: ${({ subMenuIsOpen }) => (subMenuIsOpen ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;
