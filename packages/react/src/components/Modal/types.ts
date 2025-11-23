import React, { ComponentProps, ReactNode } from 'react';

export type PropModalHorizontalPositions = 'left' | 'right' | 'center';
export type PropModalVerticalPositions = 'top' | 'bottom' | 'center';

export type PropModalSizes = 'normal' | 'full';

export interface ModalProps extends ComponentProps<'div'> {
  isOpen: boolean;
  isFiltered?: boolean;
  title?: string;
  onClose: () => void;
  onApply?: () => void;
  onClickCleanFilter?: () => void;
  children: ReactNode;
  positionHorizontal?: PropModalHorizontalPositions;
  positionVertical?: PropModalVerticalPositions;
  styleContent?: React.CSSProperties;
  size?: PropModalSizes;
  maxHeight?: string;
  iconLeftTitle?: React.ReactNode;
}
