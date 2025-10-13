import { CaretLeftFillIcon } from '@abqm-ds/icons';
import {
  ButtonBack,
  ContainerButtonBack,
  ContentChildren,
  ContentRight,
  DivTitles,
  StyledHeadingHeaderNavigator,
  StyledNavigatorDesktop,
  StyledSubTitleHeadingHeaderNavigator,
} from './styles';

import { HeaderNavigatorDesktopProps } from './types';
import { colors } from '@abqm-ds/tokens';
import { Text } from '@components/Text';

export const HeaderNavigatorDesktop = ({
  onGoBack,
  hasBackButton = false,
  title,
  subtitle,
  children,
  fontFamily = 'default',
  ...rest
}: HeaderNavigatorDesktopProps) => {
  return (
    <StyledNavigatorDesktop {...rest}>
      {hasBackButton && (
        <ContainerButtonBack>
          <ButtonBack onClick={onGoBack} aria-label="Voltar" type="button">
            <CaretLeftFillIcon
              width={18}
              height={18}
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
          {subtitle ? (
            <>
              <StyledHeadingHeaderNavigator fontSize="ssm" fontFamily={fontFamily}>
                {title}
              </StyledHeadingHeaderNavigator>
              <StyledSubTitleHeadingHeaderNavigator fontSize="sm" fontFamily={fontFamily}>
                {subtitle}
              </StyledSubTitleHeadingHeaderNavigator>
            </>
          ) : (
            <StyledHeadingHeaderNavigator fontSize="sm" fontFamily={fontFamily}>
              {title}
            </StyledHeadingHeaderNavigator>
          )}
        </DivTitles>

        {children && <ContentChildren>{children}</ContentChildren>}
      </ContentRight>
    </StyledNavigatorDesktop>
  );
};

HeaderNavigatorDesktop.displayName = 'HeaderNavigatorDesktop';

export * from './types';
