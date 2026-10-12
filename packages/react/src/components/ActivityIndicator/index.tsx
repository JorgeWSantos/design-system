import { ComponentProps, CSSProperties, ElementType } from 'react';
import { Wrapper } from './styles';
import { Spinner } from '@components/Spinner';
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
      <Spinner width={width} height={height} stroke={color} />
    </Wrapper>
  );
};

ActivityIndicator.displayName = 'ActivityIndicator';
