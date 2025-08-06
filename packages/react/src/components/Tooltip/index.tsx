import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { TooltipContainer, TooltipDiv } from './styles';
import { TooltipProps } from './types';

// Tooltip Component
export const Tooltip = ({
  children,
  contentInside,
  arrowType,
  styleToolTip,
  positions,
  ...rest
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;
    const handleScroll = () => setIsVisible(false);
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
    let anchorRect: DOMRect | null = null;
    if (containerRef.current) {
      // Tenta pegar o primeiro elemento filho como anchor
      const anchor = containerRef.current.firstElementChild as HTMLElement | null;
      if (anchor) {
        anchorRect = anchor.getBoundingClientRect();
      } else {
        anchorRect = containerRef.current.getBoundingClientRect();
      }
      let style: React.CSSProperties = {
        position: 'fixed',
        zIndex: 9999,
      };
      if (positions && typeof positions === 'object') {
        if (positions.top !== undefined) {
          style.top = anchorRect.top + Number(positions.top);
        } else if (positions.bottom !== undefined) {
          style.top = anchorRect.bottom + Number(positions.bottom);
        } else {
          style.top = anchorRect.bottom;
        }
        if (positions.left !== undefined) {
          style.left = anchorRect.left + Number(positions.left);
        } else if (positions.right !== undefined) {
          style.left = anchorRect.right + Number(positions.right);
        } else {
          style.left = anchorRect.left;
        }
      } else {
        style.top = anchorRect.bottom;
        style.left = anchorRect.left;
      }
      setTooltipStyle(style);
    }
  };

  const handleMouseLeave = () => setIsVisible(false);

  return (
    <TooltipContainer
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
      {contentInside &&
      isVisible &&
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
        ? createPortal(
            <TooltipDiv
              style={{ ...styleToolTip, ...tooltipStyle }}
              $visible={isVisible}
              $arrowType={arrowType}
            >
              {contentInside}
            </TooltipDiv>,
            document.body
          )
        : null}
    </TooltipContainer>
  );
};

Tooltip.displayName = 'Tooltip';
