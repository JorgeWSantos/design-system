import { colors, fontSizes, radii, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${space[2]};
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${space[1]};
  padding: ${space[1]} ${space[3]};

  border: 1px solid ${colors.white25};
  border-radius: ${radii.sm};
  background: transparent;
  color: ${colors.white85};
  font-size: ${fontSizes.sm};
  cursor: pointer;
  transition: background 0.2s;

  &:disabled {
    cursor: progress;
    opacity: 0.7;
  }

  &:hover:not(:disabled) {
    background: ${colors.white25};
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

// Âncora do popover do ShareOptions (posicionado em relação ao botão)
export const ShareWrapper = styled.div`
  position: relative;
`;
