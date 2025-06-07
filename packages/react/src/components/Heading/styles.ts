import { colors, fonts, lineHeights } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';
import { fontWeightTypes, FontWeightTypes } from 'types/tipography';
import { sizeVariants, SizeVariants } from '.';

interface StyledHeadingProps {
  $size?: SizeVariants;
  $weight?: FontWeightTypes;
  $color?: string;
}

export const StyledHeading = styled.h2<StyledHeadingProps>`
  font-family: ${fonts.default};
  line-height: ${lineHeights.shorter};
  margin: 0;
  color: ${colors.gray100};
  letter-spacing: -0.075rem;

  // semi default
  ${({ $weight }) =>
    $weight &&
    css`
      font-weight: ${fontWeightTypes[$weight]};
    `}

  ${({ $size }) =>
    $size &&
    css`
      font-size: ${sizeVariants[$size]};
    `}

  ${({ $size }) =>
    $size === 'sm' &&
    css`
      letter-spacing: -0.105rem;
    `}

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}
`;
