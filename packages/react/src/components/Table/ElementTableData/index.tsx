import React, { ComponentProps } from 'react';
import {
  ElementTableDataContainer,
  ElementTableDataContainerType,
  StyledTextElement,
  StyledTextElement2,
} from './styles';

export interface ElementTableDataContainerTypeProps
  extends ComponentProps<typeof ElementTableDataContainerType> {
  value: string;
  value2?: string;
  bolder?: boolean;
  textStyles?: React.CSSProperties;
}

const ElementTableData = ({
  value,
  value2,
  onClick,
  bolder = false,
  textStyles,
  ...rest
}: ElementTableDataContainerTypeProps) => {
  return (
    <ElementTableDataContainer onClick={onClick} $hasClick={!!onClick} {...rest}>
      <StyledTextElement $bolder={bolder} style={textStyles}>
        {value}
      </StyledTextElement>

      <StyledTextElement2 style={textStyles}>{value2}</StyledTextElement2>
    </ElementTableDataContainer>
  );
};

ElementTableData.displayName = 'ElementTableData';

export { ElementTableData };
