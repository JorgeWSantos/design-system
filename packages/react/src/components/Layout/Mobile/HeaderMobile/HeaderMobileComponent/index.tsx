import * as S from './styles';
import { colors } from '@abqm-ds/tokens';

interface Props {
  title: string;
  page: string;
  menuIsOpen: boolean;
  hideSubMenu: () => void;
  toggleMenu: () => void;
  visibleSubmenu: boolean;
  hasMenu: boolean;
}

const HeaderMobileComponent = ({
  title,
  page,
  menuIsOpen,
  visibleSubmenu,
  hideSubMenu,
  toggleMenu,
  hasMenu,
}: Props) => {
  return (
    <S.Container>
      <S.StyledLogo />

      <S.DivLabels>
        <S.Title>{title}</S.Title>
        <S.Label>{page.toUpperCase()}</S.Label>
      </S.DivLabels>

      <S.DivButtons>
        {hasMenu && (
          <S.MenuHamburgueIconWrapper
            onClick={!visibleSubmenu ? toggleMenu : hideSubMenu}
          >
            <S.MenuHamburgueIcon
              $menuIsOpen={menuIsOpen}
              fill={colors.white85}
              width={32}
              height={32}
            />
            <S.CloseMenuIcon
              $menuIsOpen={visibleSubmenu ? false : menuIsOpen}
              fill={colors.white85}
              width={32}
              height={32}
            />
            <S.BackMenuIcon
              $subMenuIsOpen={visibleSubmenu}
              fill={colors.white85}
              width={22}
              height={22}
            />
          </S.MenuHamburgueIconWrapper>
        )}
      </S.DivButtons>
    </S.Container>
  );
};

export default HeaderMobileComponent;
