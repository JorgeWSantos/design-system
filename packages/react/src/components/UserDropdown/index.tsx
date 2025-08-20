import { ComponentProps, useCallback } from 'react';
import {
  AvatarDiv,
  ButtonTooltip,
  DivTooltip,
  Dropdown,
  UserDropdownContent,
  UserDropdownWrapper,
} from './styles';
import { Text } from '@components/Text';
import { BoxArrowInLeftIcon, CaretDownFillIcon } from '@abqm-ds/icons';
import { Tooltip } from '@components/Tooltip';
import { colors } from '@abqm-ds/tokens';

export interface UserDropDownProps extends ComponentProps<typeof UserDropdownWrapper> {
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
      <UserDropdownContent onClick={userName !== '' ? () => {} : onLogin}>
        <AvatarDiv src={srcImage} />
        <Dropdown>
          <Text fontSize="ssm" color={colors.white75}>
            {signed ? userName : 'Entrar / Cadastre-se'}
          </Text>
          <CaretDownFillIcon width={12} height={12} fill={colors.white85} />
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
          positions={{
            left: '80',
          }}
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
