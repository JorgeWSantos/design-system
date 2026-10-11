import { Children, ReactNode } from 'react';
import { CaretLeftFillIcon } from '@abqm-ds/icons';
import {
  ButtonBack,
  ContainerButtonBack,
  ContainerImage,
  ContentChildren,
  ContentRight,
  DivTitleGroup,
  DivTitles,
  StyledHeadingHeaderNavigator,
  StyledNavigatorDesktop,
  StyledSubTitleHeadingHeaderNavigator,
} from './styles';

import { HeaderNavigatorDesktopProps } from './types';
import { colors } from '@abqm-ds/tokens';
import { Text } from '@components/Text';

// Antes e depois do título cabe um ou vários elementos (lista ou fragment), lado a lado.
// Children.toArray descarta vazios (`cond && <Badge />`) e dá key aos itens de uma lista.
const renderTitleAdornment = (content?: ReactNode) => {
  const items = Children.toArray(content);

  return items.length > 0 ? <ContainerImage>{items}</ContainerImage> : null;
};

export const HeaderNavigatorDesktop = ({
  onGoBack,
  hasBackButton = false,
  title,
  subtitle,
  image,
  titleSuffix,
  children,
  fontFamily = 'default',
  fontSizeTitle,
  fontSizeSubtitle,
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
        <DivTitleGroup>
          {renderTitleAdornment(image)}

          <DivTitles>
            {subtitle ? (
              <>
                <StyledHeadingHeaderNavigator
                  fontSize={fontSizeTitle || 'ssm'}
                  fontFamily={fontFamily}
                >
                  {title}
                </StyledHeadingHeaderNavigator>

                <StyledSubTitleHeadingHeaderNavigator
                  fontSize={fontSizeSubtitle || 'sm'}
                  fontFamily={fontFamily}
                >
                  {subtitle}
                </StyledSubTitleHeadingHeaderNavigator>
              </>
            ) : (
              <StyledHeadingHeaderNavigator
                fontSize={fontSizeTitle || 'sm'}
                fontFamily={fontFamily}
              >
                {title}
              </StyledHeadingHeaderNavigator>
            )}
          </DivTitles>

          {renderTitleAdornment(titleSuffix)}
        </DivTitleGroup>

        {children && <ContentChildren>{children}</ContentChildren>}
      </ContentRight>
    </StyledNavigatorDesktop>
  );
};

HeaderNavigatorDesktop.displayName = 'HeaderNavigatorDesktop';

export * from './types';
