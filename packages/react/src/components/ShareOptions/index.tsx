import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  XIcon,
} from 'react-share';
import { ShareOptionsContainer, IconButton } from './styles';

export type ShareOptionsVariantArrowTypes = 'top' | 'bottom';

interface ShareOptionsProps {
  url: string;
  variantArrow?: ShareOptionsVariantArrowTypes;
}

const ShareOptions: React.FC<ShareOptionsProps> = ({ url, variantArrow = 'top' }) => (
  <ShareOptionsContainer $variantArrow={variantArrow}>
    <FacebookShareButton url={url}>
      <IconButton>
        <FacebookIcon style={{ borderRadius: '50%', width: 32, height: 32 }} />
      </IconButton>
    </FacebookShareButton>
    <TwitterShareButton url={url}>
      <IconButton>
        <XIcon style={{ borderRadius: '50%', width: 32, height: 32 }} />
      </IconButton>
    </TwitterShareButton>
  </ShareOptionsContainer>
);

export { ShareOptions };
