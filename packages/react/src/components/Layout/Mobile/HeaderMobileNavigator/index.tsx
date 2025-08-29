import { CaretLeftFillIcon, XIcon } from '@abqm-ds/icons';
import {
  ButtonBack,
  ButtonSearch,
  ContainerButtonBack,
  StyledNavigatorMobile,
  StyledWrapperSearch,
  ButtonsWrapper,
} from './styles';

import { HeaderMobileNavigatorProps } from './types';
import { colors } from '@abqm-ds/tokens';
import { Heading } from '@components/Heading';
import { SearchIcon } from '@abqm-ds/icons';
import { useState } from 'react';
import { TextInput } from '@components/TextInput';
import { HeaderMobileButton } from './HeaderMobileButton';

export const HeaderMobileNavigator = ({
  onGoBack,
  hasBackButton = false,
  children,
  headingText,
  hasSearch = false,
  onChangeSearch,
  buttons,
  ...rest
}: HeaderMobileNavigatorProps) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <StyledNavigatorMobile {...rest}>
      {hasBackButton && (
        <ContainerButtonBack>
          <ButtonBack onClick={onGoBack} aria-label="Voltar" type="button">
            <CaretLeftFillIcon
              width={19}
              height={19}
              fill={colors.white85}
              style={{ marginRight: '1px', marginBottom: '1px' }}
            />
          </ButtonBack>
        </ContainerButtonBack>
      )}
      {headingText && headingText !== '' && !searchIsOpen && (
        <Heading color={colors.white85} style={{ whiteSpace: 'nowrap' }}>
          {headingText}
        </Heading>
      )}
      {hasSearch && (
        <StyledWrapperSearch>
          {searchIsOpen && (
            <TextInput
              variant="secondary"
              icon={
                <XIcon
                  width={16}
                  height={16}
                  fill={colors.white75}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSearchIsOpen(false)}
                />
              }
              placeholder="digite para buscar..."
              onChange={onChangeSearch}
              debounceDelay={1000}
            />
          )}

          {!searchIsOpen && (
            <ButtonSearch
              onClick={() => setSearchIsOpen(true)}
              aria-label="Pesquisar"
              type="button"
            >
              <SearchIcon
                width={16}
                height={16}
                fill={colors.white50}
                style={{ cursor: 'pointer' }}
              />
            </ButtonSearch>
          )}
        </StyledWrapperSearch>
      )}

      {buttons && (
        <ButtonsWrapper>
          {buttons.map((button, index) => (
            <HeaderMobileButton
              disabled={button.disabled}
              onClick={button.onClick}
              key={index}
              isActive={button.isActive}
            >
              {button.icon}
            </HeaderMobileButton>
          ))}
        </ButtonsWrapper>
      )}
      {children}
      {}
    </StyledNavigatorMobile>
  );
};

HeaderMobileNavigator.displayName = 'HeaderMobileNavigator';

export * from './types';
