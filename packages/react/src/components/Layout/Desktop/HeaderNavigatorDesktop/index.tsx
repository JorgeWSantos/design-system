import { CaretLeftFillIcon } from '@abqm-ds/icons';
import {
  ButtonBack,
  ContainerButtonBack,
  ContentChildren,
  ContentRight,
  DivTitles,
  StyledNavigatorDesktop,
} from './styles';

import { HeaderNavigatorDesktopProps } from './types';
import { colors } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import { Heading } from '@components/Heading';

export const HeaderNavigatorDesktop = ({
  onGoBack,
  hasBackButton = false,
  title,
  subtitle,
  children,
  ...rest
}: HeaderNavigatorDesktopProps) => {
  return (
    <StyledNavigatorDesktop {...rest}>
      {hasBackButton && (
        <ContainerButtonBack>
          <ButtonBack onClick={onGoBack} aria-label="Voltar" type="button">
            <CaretLeftFillIcon
              width={10}
              height={13}
              fill={colors.white75}
              style={{ marginRight: '2px' }}
            />
          </ButtonBack>
          <Text fontSize="xxs" color={colors.white75}>
            voltar
          </Text>
        </ContainerButtonBack>
      )}

      <ContentRight>
        <DivTitles>
          {/* implementar posteriormente o subtítulo */}
          {subtitle ? (
            <></>
          ) : (
            <Heading as="h1" fontSize="sm" color={colors.white75}>
              {title}
            </Heading>
          )}
        </DivTitles>
        <ContentChildren>{children}</ContentChildren>
      </ContentRight>
    </StyledNavigatorDesktop>
  );
};

HeaderNavigatorDesktop.displayName = 'HeaderNavigatorDesktop';

export * from './types';
