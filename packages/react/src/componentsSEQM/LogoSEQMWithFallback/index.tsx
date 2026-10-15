import { ComponentProps, useState } from 'react';
import { LogoAbqmBorderedEmeraldIcon, LogoAbqmBorderedWhiteIcon } from '@abqm-ds/icons';
import { ImageContainer } from './styles';
import { LogoSEQMWithFallbackDataType } from './types';

export interface LogoSEQMWithFallbackProps extends ComponentProps<typeof ImageContainer> {
  data: LogoSEQMWithFallbackDataType | null;
  light?: boolean; // default false
  /** Reduz o logotipo (60x50 → 48x40). Útil no mobile. Default: false */
  small?: boolean;
}

const LogoSEQMWithFallback = ({ data, light, small }: LogoSEQMWithFallbackProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <ImageContainer $light={light} $small={small}>
      {data?.logotipo && !imgError ? (
        <img
          src={data.logotipo}
          alt="Logotipo do evento"
          onError={() => setImgError(true)}
        />
      ) : (
        <>{light ? <LogoAbqmBorderedWhiteIcon /> : <LogoAbqmBorderedEmeraldIcon />}</>
      )}
    </ImageContainer>
  );
};

LogoSEQMWithFallback.displayName = 'LogoSEQMWithFallback';

export { LogoSEQMWithFallback };

export type { LogoSEQMWithFallbackDataType };
