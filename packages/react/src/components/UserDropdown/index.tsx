import { ComponentProps, ElementType, useCallback } from 'react';
import {
  AvatarDiv,
  ButtonTooltip,
  DivTooltip,
  Dropdown,
  UserDropdownContent,
  UserDropdownWrapper,
} from './styles';
import { Text } from '@components/Text';
import { BoxArrowInLeftIcon, CaretDownIcon } from '@abqm-ui2/icons';
import { Tooltip } from '@components/Tooltip';
import { colors } from '@abqm-ui2/tokens';

export interface UserDropDownProps extends ComponentProps<typeof UserDropdownWrapper> {
  as?: ElementType;
  userName: string;
  srcImage: string;
  onLogout?: () => void;
  onLogin?: () => void;
}

export const UserDropDown = ({
  userName = '',
  srcImage = '',
  onLogout,
  onLogin,
  ...rest
}: UserDropDownProps) => {
  const signed = !!userName;

  const contentUserDropdown = useCallback(
    () => (
      <UserDropdownContent onClick={onLogin}>
        <AvatarDiv src={srcImage} />
        <Dropdown>
          <Text fontSize="ssm">{signed ? userName : 'Entrar / Cadastre-se'}</Text>
          <CaretDownIcon width={'8.7px'} height={'5.6px'} />
        </Dropdown>
      </UserDropdownContent>
    ),
    [userName, srcImage, onLogin]
  );

  return (
    <UserDropdownWrapper {...rest}>
      {signed ? (
        <Tooltip
          arrowType="topRight"
          contentInside={
            signed && (
              <DivTooltip>
                <ButtonTooltip onClick={onLogout}>
                  <BoxArrowInLeftIcon style={{ visibility: 'hidden' }} />
                  <Text fontSize="ssm" $fontWeight="semiBold" color={colors.black75}>
                    Sair
                  </Text>
                  <BoxArrowInLeftIcon />
                </ButtonTooltip>
              </DivTooltip>
            )
          }
        >
          {contentUserDropdown()}
        </Tooltip>
      ) : (
        contentUserDropdown()
      )}
    </UserDropdownWrapper>
  );
};

UserDropDown.displayName = 'UserDropDown';
