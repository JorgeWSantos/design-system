import { ComponentProps } from 'react';
import {
  ContainerContent,
  Social,
  SocialIcons,
  SocialText,
  Circle,
  SiteText,
  SocialIcon,
} from './styles';

import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@abqm-ds/icons';
import { breakpoints, colors } from '@abqm-ds/tokens';
import { useWindowSize } from 'utils/useWindowSize';

export interface FooterContentProps extends ComponentProps<typeof ContainerContent> {}

const socialIcons = (width: number) => {
  if (width > breakpoints.lg) {
    return (
      <SocialIcons>
        <SocialIcon href="https://www.youtube.com/@abqmoficial" target="_blank">
          <YoutubeIcon width={12} height={12} fill={colors.emeraldGreen75} />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/abqmoficial/" target="_blank">
          <InstagramIcon
            width={12}
            height={12}
            style={{ marginTop: '0.063rem' }}
            fill={colors.emeraldGreen75}
          />
        </SocialIcon>
        <SocialIcon href="https://www.facebook.com/abqmoficial" target="_blank">
          <FacebookIcon
            width={14}
            height={13}
            style={{ marginTop: '0.03rem' }}
            fill={colors.emeraldGreen75}
          />
        </SocialIcon>
      </SocialIcons>
    );
  }

  if (width > breakpoints.md) {
    return (
      <SocialIcons>
        <SocialIcon>
          <YoutubeIcon width={12} height={11} style={{}} />
        </SocialIcon>
        <SocialIcon>
          <InstagramIcon
            width={12}
            height={13}
            style={{ marginLeft: '0', marginTop: '0.063rem' }}
          />
        </SocialIcon>
        <SocialIcon>
          <FacebookIcon
            width={14}
            height={13}
            style={{ marginLeft: '-0.063rem', marginTop: '0.063rem' }}
          />
        </SocialIcon>
      </SocialIcons>
    );
  }

  return <></>;
};

export const FooterContent = () => {
  const { width } = useWindowSize();

  return (
    <ContainerContent>
      <Social>
        {socialIcons(width)}

        <SocialText href="https://www.instagram.com/abqmoficial" target="_blank">
          @ABQMOFICIAL
        </SocialText>
        <Circle />
        <SiteText href="https://www.abqm.com.br" target="_blank">
          WWW.ABQM.COM.BR
        </SiteText>
      </Social>
    </ContainerContent>
  );
};

FooterContent.displayName = 'FooterContent';
