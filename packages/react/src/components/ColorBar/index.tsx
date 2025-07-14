import { ComponentProps, CSSProperties, ElementType } from 'react';
import { BarWrapper, ColorSegment } from './styles';
import { colors } from '@abqm-ds/tokens';

export interface ColorBarProps extends ComponentProps<typeof BarWrapper> {
  as?: ElementType;
  style?: CSSProperties;
}

export const ColorBar = ({ style, ...rest }: ColorBarProps) => {
  const fixedColors = [
    colors.brown700,
    colors.brown500,
    colors.yellow200,
    colors.yellow400,
    colors.green100,
    colors.green300,
    colors.green500,
  ];

  return (
    <BarWrapper style={style} {...rest}>
      {fixedColors.map((color, index) => (
        <ColorSegment key={index} style={{ backgroundColor: color }} />
      ))}
    </BarWrapper>
  );
};

ColorBar.displayName = 'ColorBar';
