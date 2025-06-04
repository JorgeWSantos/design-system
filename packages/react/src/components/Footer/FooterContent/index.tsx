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

import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@abqm-ui2/icons';
import { breakpoints } from '@abqm-ui2/tokens';
import { useWindowSize } from 'utils/useWindowSize';

export interface FooterContentProps extends ComponentProps<typeof ContainerContent> {}

const socialIcons = (width: number) => {
  if (width > breakpoints.lg) {
    return (
      <SocialIcons>
        <SocialIcon>
          <YoutubeIcon width={12} height={12} />
        </SocialIcon>
        <SocialIcon>
          <InstagramIcon width={12} height={12} style={{ marginTop: '0.063rem' }} />
        </SocialIcon>
        <SocialIcon>
          <FacebookIcon width={14} height={13} style={{ marginTop: '0.063rem' }} />
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

        <SocialText>@ABQMOFICIAL</SocialText>
        <Circle />
        <SiteText>WWW.ABQM.COM.BR</SiteText>
      </Social>
    </ContainerContent>
  );
};

FooterContent.displayName = 'FooterContent';
