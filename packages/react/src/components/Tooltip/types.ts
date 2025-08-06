import React, { ComponentProps, ReactNode } from 'react';
import { TooltipContainer } from './styles';

export type ArrowType = 'topRight' | 'bottomRight' | 'bottomCentralized' | 'bottomLeft';

export type TooltipPositions = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode;
  contentInside: ReactNode;
  arrowType: ArrowType;
  styleToolTip?: React.CSSProperties;
  positions?: TooltipPositions;
}
