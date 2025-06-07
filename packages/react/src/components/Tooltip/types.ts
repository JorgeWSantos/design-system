import React, { ComponentProps, ReactNode } from 'react';
import { TooltipContainer } from './styles';

export type ArrowType = 'topRight' | 'bottomRight' | 'bottomCentralized';

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode;
  contentInside: ReactNode;
  arrowType: ArrowType;
  styleToolTip?: React.CSSProperties;
}
