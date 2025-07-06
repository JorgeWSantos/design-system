import { ComponentProps, ElementType, ReactNode } from 'react';

import {
  StyledHeaderButton,
  ContainerHeaderButton,
  StyledText,
  FilteredIndicator,
} from './styles';
import { RoundedButton } from '@components/RoundedButton';

export interface HeaderButtonProps extends ComponentProps<typeof StyledHeaderButton> {
  as?: ElementType;
  children: ReactNode; //icon
  disabled?: boolean;
  isFiltered?: boolean;
  label: string;
}

export const HeaderButton = ({
  children,
  label,
  onClick,
  disabled,
  isFiltered = false,
}: HeaderButtonProps) => {
  return (
    <ContainerHeaderButton $isFiltered={isFiltered}>
      {isFiltered && <FilteredIndicator />}
      <RoundedButton disabled={disabled} onClick={onClick}>
        {children}
      </RoundedButton>
      <StyledText $isFiltered={isFiltered} disabled={disabled}>
        {label}
      </StyledText>
    </ContainerHeaderButton>
  );
};

HeaderButton.displayName = 'HeaderButton';
