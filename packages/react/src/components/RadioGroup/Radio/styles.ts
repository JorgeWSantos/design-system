import { space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const ContainerRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledRadio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #808080;
  border-radius: 50%;
  background: #fff;
  margin: 0;
  position: relative;
  transition: border-color 0.2s;

  &:checked {
    border-color: #808080;
  }

  &:checked::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 4px solid #808080;
    position: absolute;
    top: -2px;
    left: -2px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${space[1]};
`;
