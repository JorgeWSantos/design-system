import { colors, fonts } from '@abqm-ui2/tokens';
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
  size?: FontSizeTypes;
  disabled?: boolean;
  fontWeight?: FontWeightTypes;
  lineHeight?: LineHeightTypes;
}

export const StyledText = styled.p<StyledHeadingProps>`
  font-family: ${fonts.default};
  line-height: ${({ lineHeight }) => lineHeightTypes[lineHeight || 'initial']};
  font-weight: ${({ fontWeight }) => fontWeightTypes[fontWeight || 'regular']};
  margin: 0;
  color: ${colors.gray100};

  ${({ size }) =>
    size &&
    css`
      font-size: ${fontSizeTypes[size]};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${colors.white50};
    `}
`;
