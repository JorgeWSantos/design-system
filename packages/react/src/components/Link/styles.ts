import { colors, fonts } from '@abqm-ds/tokens';
import { css, styled } from 'styled-components';
import {
  fontSizeTypes,
  FontSizeTypes,
  fontWeightTypes,
  FontWeightTypes,
  lineHeightTypes,
  LineHeightTypes,
} from 'types/tipography';

interface StyledHeadingProps {
  $fontSize?: FontSizeTypes;
  $disabled?: boolean;
  $fontWeight?: FontWeightTypes;
  $lineHeight?: LineHeightTypes;
  $color?: string;
}

export const StyledLink = styled.a<StyledHeadingProps>`
  font-family: ${fonts.default};
  line-height: ${(props) => lineHeightTypes[props.$lineHeight || 'initial']};
  font-weight: ${(props) => fontWeightTypes[props.$fontWeight || 'regular']};
  margin: 0;
  color: ${(props) => props.$color};

  ${(props) =>
    props.$fontSize &&
    css`
      font-size: ${fontSizeTypes[props.$fontSize]};
    `}

  ${(props) =>
    props.$disabled &&
    css`
      color: ${colors.white50};
    `}
`;
