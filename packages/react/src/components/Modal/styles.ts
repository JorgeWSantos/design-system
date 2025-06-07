import { XIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  max-width: 90%;
  z-index: 1060;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledXIcon = styled(XIcon)`
  path {
    fill: ${colors.black85};
  }
`;
