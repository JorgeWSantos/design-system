import { ComponentProps, CSSProperties, ElementType } from 'react';
import { BarWrapper, ColorSegment } from './styles';
import { theme } from '../../styles';

export interface ColorBarProps extends ComponentProps<typeof BarWrapper> {
  as?: ElementType;
  style?: CSSProperties;
}

export const ColorBar = ({ style, ...rest }: ColorBarProps) => {
  const fixedColors = [
    theme.colors.brown700,
    theme.colors.brown500,
    theme.colors.yellow200,
    theme.colors.yellow400,
    theme.colors.green100,
    theme.colors.green300,
    theme.colors.green500,
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
