import React from 'react';
import { InstapaperShareButton, InstapaperIcon, WhatsappIcon } from 'react-share';
import { ShareOptionsContainer, IconButton, WrapperWhatsapp } from './styles';

export type ShareOptionsVariantArrowTypes = 'top' | 'bottom';

/**
 * 'screen' (padrão) mantém o posicionamento histórico: canto superior direito no
 * desktop e acima do rodapé no mobile. 'button' ancora o popover logo abaixo do
 * botão que o abriu — use quando o botão de compartilhar está no header mobile.
 */
export type ShareOptionsAnchorTypes = 'screen' | 'button';

interface ShareOptionsProps {
  url: string;
  variantArrow?: ShareOptionsVariantArrowTypes;
  anchor?: ShareOptionsAnchorTypes;
}

const ShareOptions: React.FC<ShareOptionsProps> = ({
  url,
  variantArrow = 'top',
  anchor = 'screen',
}) => (
  <ShareOptionsContainer $variantArrow={variantArrow} $anchor={anchor}>
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
