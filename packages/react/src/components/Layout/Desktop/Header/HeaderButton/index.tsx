import { ElementType, ReactNode, MouseEvent } from 'react';

import {
  StyledHeaderButton,
  ContainerHeaderButton,
  StyledText,
  FilteredIndicator,
} from './styles';
import { RoundedButton } from '@components/RoundedButton';

export interface HeaderButtonProps {
  as?: ElementType;
  children: ReactNode; //icon
  disabled?: boolean;
  isFiltered?: boolean;
  label: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const HeaderButton = ({
  children,
  label,
  onClick,
  disabled,
  isFiltered = false,
}: HeaderButtonProps) => {
  return (
    <ContainerHeaderButton
      $isFiltered={isFiltered}
      onClick={disabled ? undefined : onClick}
      style={disabled ? { pointerEvents: 'none', opacity: 0.6 } : undefined}
    >
      {isFiltered && <FilteredIndicator />}
      <RoundedButton disabled={disabled}>{children}</RoundedButton>
      <StyledText $isFiltered={isFiltered} disabled={disabled}>
        {label}
      </StyledText>
    </ContainerHeaderButton>
  );
};

HeaderButton.displayName = 'HeaderButton';
