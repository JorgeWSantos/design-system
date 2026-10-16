import React, { ComponentProps } from 'react';
import {
  CompetitorTableDataContainer,
  CompetitorTableDataContainerType,
  StyledTextCompetitor,
} from './styles';

export interface CompetitorTableDataContainerTypeProps
  extends ComponentProps<typeof CompetitorTableDataContainerType> {
  value: string;
  bolder?: boolean;
  textStyles?: React.CSSProperties;
}

const CompetitorTableData = ({
  value,
  onClick,
  bolder = false,
  textStyles,
  ...rest
}: CompetitorTableDataContainerTypeProps) => {
  return (
    <CompetitorTableDataContainer onClick={onClick} $hasClick={!!onClick} {...rest}>
      <StyledTextCompetitor $bolder={bolder} style={textStyles}>
        {value}
      </StyledTextCompetitor>
    </CompetitorTableDataContainer>
  );
};

CompetitorTableData.displayName = 'CompetitorTableData';

export { CompetitorTableData };
// seletor do container (styled-components) para o app ajustar a célula na própria tabela,
// ex.: a altura de 2rem do mobile
export { CompetitorTableDataContainerType };
