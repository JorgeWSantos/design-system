import React, { useState } from 'react';
import { TooltipContainer, TooltipDiv } from './styles';
import { TooltipProps } from './types';

// Tooltip Component
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
