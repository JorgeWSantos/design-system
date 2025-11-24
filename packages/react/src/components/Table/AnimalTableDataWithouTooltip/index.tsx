import React, { ComponentProps } from 'react';
import {
  AnimalTableDataWithoutTooltipContainer,
  AnimalTableDataWithoutTooltipContainerType,
  StyledTextCompetitor,
  StyledTextCompetitor2,
} from './styles';

export interface AnimalTableDataWithoutTooltipContainerTypeProps
  extends ComponentProps<typeof AnimalTableDataWithoutTooltipContainerType> {
  value: string;
  value2?: string;
  bolder?: boolean;
  textStyles?: React.CSSProperties;
}

const AnimalTableDataWithoutTooltip = ({
  value,
  value2,
  onClick,
  bolder = false,
  textStyles,
  ...rest
}: AnimalTableDataWithoutTooltipContainerTypeProps) => {
  return (
    <AnimalTableDataWithoutTooltipContainer
      onClick={onClick}
      $hasClick={!!onClick}
      {...rest}
    >
      <StyledTextCompetitor $bolder={bolder} style={textStyles}>
        {value}
      </StyledTextCompetitor>

      <StyledTextCompetitor2 style={textStyles}>{value2}</StyledTextCompetitor2>
    </AnimalTableDataWithoutTooltipContainer>
  );
};

AnimalTableDataWithoutTooltip.displayName = 'AnimalTableDataWithoutTooltip';

export { AnimalTableDataWithoutTooltip };
