import { CaretLeftFillIcon } from '@abqm-ds/icons';
import { ButtonBack, ContainerButtonBack, StyledNavigatorMobile } from './styles';

import { HeaderMobileNavigatorProps } from './types';
import { colors } from '@abqm-ds/tokens';

export const HeaderMobileNavigator = ({
  onGoBack,
  hasBackButton = false,
  children,
  ...rest
}: HeaderMobileNavigatorProps) => {
  return (
    <StyledNavigatorMobile {...rest}>
      {hasBackButton && (
        <ContainerButtonBack>
          <ButtonBack onClick={onGoBack} aria-label="Voltar" type="button">
            <CaretLeftFillIcon
              width={10}
              height={13}
              fill={colors.white85}
              style={{ marginRight: '2px' }}
            />
          </ButtonBack>
        </ContainerButtonBack>
      )}
      {children}
    </StyledNavigatorMobile>
  );
};

HeaderMobileNavigator.displayName = 'HeaderMobileNavigator';

export * from './types';
