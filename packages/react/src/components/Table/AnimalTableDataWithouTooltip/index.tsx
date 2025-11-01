import React, { ComponentProps } from 'react';
import {
  AnimalTableDataWithoutTooltipContainer,
  AnimalTableDataWithoutTooltipContainerType,
  StyledTextCompetitor,
} from './styles';

export interface AnimalTableDataWithoutTooltipContainerTypeProps
  extends ComponentProps<typeof AnimalTableDataWithoutTooltipContainerType> {
  value: string;
  bolder?: boolean;
  textStyles?: React.CSSProperties;
}

const AnimalTableDataWithoutTooltip = ({
  value,
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
    </AnimalTableDataWithoutTooltipContainer>
  );
};

AnimalTableDataWithoutTooltip.displayName = 'AnimalTableDataWithoutTooltip';

export { AnimalTableDataWithoutTooltip };
