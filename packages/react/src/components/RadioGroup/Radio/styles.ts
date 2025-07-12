import { space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const ContainerRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${space[1]};

  input[type='radio'] {
    display: none; /* Esconde o input nativo */
  }

  .radio-mark {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #808080; /* Cor da borda */
    border-radius: 50%;
    vertical-align: middle;
    transition: border-color 0.2s;
    box-sizing: border-box;
    background: #fff;
    position: relative;
  }

  .radio-mark::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    transform: scale(1);
    border-radius: 50%;
    background: transparent; /* Cor do círculo preenchido */
    border: 4px solid #808080; /* Cor do círculo preenchido */
    position: absolute;
    top: -2px;
    left: -2px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  input[type='radio']:checked + .radio-mark::after {
    opacity: 1;
  }
`;
