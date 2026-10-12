import type { SVGProps } from 'react';
import { SpinnerSvg } from './styles';

export type SpinnerProps = SVGProps<SVGSVGElement>;

/**
 * Spinner
 *
 * Anel que gira, usado pelo ActivityIndicator, TextInput e Autocomplete (interno: não está
 * no barrel). Mesmo desenho do SpinnerRingResizeIcon, mas com o arco fixo e a rotação feita
 * por `transform` no <svg> — ver os comentários em `styles.ts`.
 *
 * @param stroke Cor do anel. Padrão `currentColor`.
 */
export const Spinner = ({ stroke = 'currentColor', ...rest }: SpinnerProps) => (
  <SpinnerSvg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    {...rest}
  >
    <circle
      cx={12}
      cy={12}
      r={9.5}
      stroke={stroke}
      strokeWidth={3}
      strokeLinecap="round"
      strokeDasharray="36 150"
    />
  </SpinnerSvg>
);

Spinner.displayName = 'Spinner';
