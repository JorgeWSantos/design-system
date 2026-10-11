import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledNavigatorDesktop } from './styles';
import { FontFamilyTypes, FontSizeTypes } from 'types/tipography';
import { FontSizeVariants } from '@components/Heading';

export interface HeaderNavigatorDesktopProps
  extends ComponentProps<typeof StyledNavigatorDesktop> {
  as?: ElementType;
  onGoBack?: () => void;
  children?: ReactNode;
  hasBackButton?: boolean;
  title: string;
  subtitle?: string;
  /** Antes do título, à esquerda: um elemento ou vários (lista/fragment), lado a lado (ex.: foto). */
  image?: ReactNode;
  /** Depois do título, à direita: um elemento ou vários (lista/fragment), lado a lado (ex.: selos de premiação). */
  titleSuffix?: ReactNode;
  fontFamily?: FontFamilyTypes;
  fontSizeTitle?: FontSizeVariants;
  fontSizeSubtitle?: FontSizeTypes;
}
