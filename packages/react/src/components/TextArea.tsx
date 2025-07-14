import { colors, fonts, fontSizes, fontWeights, radii, space } from '@abqm-ds/tokens';
import { ComponentProps, ElementType } from 'react';
import { styled } from 'styled-components';

export const TextArea = styled.textarea`
  background-color: ${colors.gray900};
  padding: ${space[3]} ${space[4]};
  border-radius: ${radii.sm};
  box-sizing: border-box;
  border: ${radii.xs} solid ${colors.gray900};
  display: flex;
  align-items: baseline;

  font-family: ${fonts.default};
  font-size: ${fontSizes.sm};
  color: ${colors.white};
  font-weight: ${fontWeights.regular};
  resize: vertical;
  min-height: 80;

  &:focus {
    outline: 0;
    border-color: ${colors.green500};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.gray400};
  }
`;

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType;
}

TextArea.displayName = 'TextArea';
