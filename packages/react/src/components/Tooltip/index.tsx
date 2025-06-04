import React, { ComponentProps, ReactNode, useState } from 'react';
import { TooltipContainer, TooltipDiv } from './styles';

export type ArrowType = 'topRight' | 'bottomRight' | 'bottomCentralized';

// Tooltip Component
export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode;
  contentInside: ReactNode; // Ajustando o tipo de content
  arrowType: ArrowType;
  styleToolTip?: React.CSSProperties;
}

export const Tooltip = ({
  children,
  contentInside,
  arrowType,
  styleToolTip,
  ...rest
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
      <TooltipDiv style={styleToolTip} $visible={isVisible} $arrowType={arrowType}>
        {contentInside}
      </TooltipDiv>
    </TooltipContainer>
  );
};

Tooltip.displayName = 'Tooltip';
