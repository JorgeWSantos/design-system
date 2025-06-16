import { ComponentProps, CSSProperties, ElementType } from 'react';
import { Wrapper } from './styles';
import { SpinnerRingResizeIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';

export interface ActivityIndicatorProps extends ComponentProps<typeof Wrapper> {
  as?: ElementType;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const ActivityIndicator = ({
  style,
  width = 30,
  height = 30,
  color = colors.black50,
  ...rest
}: ActivityIndicatorProps) => {
  return (
    <Wrapper style={style} {...rest}>
      <SpinnerRingResizeIcon width={width} height={height} fill={color} />
    </Wrapper>
  );
};

ActivityIndicator.displayName = 'ActivityIndicator';
