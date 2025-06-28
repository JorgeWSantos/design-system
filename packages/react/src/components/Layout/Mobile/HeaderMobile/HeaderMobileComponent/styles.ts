import { CaretDownFillIcon, ListIcon, XIcon } from '@abqm-ds/icons';
import { Text } from '@components/Text';
import { colors, radii, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  display: flex;
  height: 2.5rem;
  align-self: stretch;
  max-height: 2.5rem;
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
  max-height: 2.5rem;
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
  margin-top: -0.3rem;
  letter-spacing: 0.08125rem;
`;

// Container do botão
export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-width: 2rem;
  width: 2rem;
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
export const MenuHamburgueIcon = styled(ListIcon)<{ $menuIsOpen: boolean }>`
  position: absolute;
  top: 10;
  left: 0;
  border-radius: ${radii.pxx};
  transform: ${({ $menuIsOpen }) => ($menuIsOpen ? 'rotate(45deg)' : 'rotate(0)')};
  opacity: ${({ $menuIsOpen }) => ($menuIsOpen ? 0 : 1)};
  transition: all 0.2s ease-in-out;
`;

// Ícone de fechar (X)
export const CloseMenuIcon = styled(XIcon)<{ $menuIsOpen: boolean }>`
  position: absolute;
  top: 10;
  left: 0;

  transform: ${({ $menuIsOpen }) => ($menuIsOpen ? 'rotate(90deg)' : 'rotate(0)')};
  opacity: ${({ $menuIsOpen }) => ($menuIsOpen ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;
export const BackMenuIcon = styled(CaretDownFillIcon)<{ $subMenuIsOpen: boolean }>`
  position: absolute;
  top: 10;
  left: 0;

  transform: ${({ $subMenuIsOpen }) => ($subMenuIsOpen ? 'rotate(90deg)' : 'rotate(0)')};
  opacity: ${({ $subMenuIsOpen }) => ($subMenuIsOpen ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;
