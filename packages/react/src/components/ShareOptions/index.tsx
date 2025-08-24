import React from 'react';
import { InstapaperShareButton, InstapaperIcon, WhatsappIcon } from 'react-share';
import { ShareOptionsContainer, IconButton, WrapperWhatsapp } from './styles';

export type ShareOptionsVariantArrowTypes = 'top' | 'bottom';

interface ShareOptionsProps {
  url: string;
  variantArrow?: ShareOptionsVariantArrowTypes;
}

const ShareOptions: React.FC<ShareOptionsProps> = ({ url, variantArrow = 'top' }) => (
  <ShareOptionsContainer $variantArrow={variantArrow}>
    <WrapperWhatsapp
      href={`https://wa.me/?text=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton>
        <WhatsappIcon style={{ borderRadius: '50%' }} />
      </IconButton>
    </WrapperWhatsapp>
  </ShareOptionsContainer>
);

export { ShareOptions };
