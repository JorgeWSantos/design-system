import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 21"
    {...props}
  >
    <rect width={20} height={20} y={0.221} fill="#fff" fillOpacity={0.5} rx={10} />
    <path
      fill="#001007"
      fillOpacity={0.75}
      d="M16 10.258c0-3.335-2.687-6.038-6-6.038-3.315 0-6.001 2.703-6.001 6.038 0 3.013 2.194 5.51 5.062 5.964v-4.22H7.539v-1.744h1.524V8.927c0-1.513.896-2.348 2.266-2.348.657 0 1.343.117 1.343.117v1.485h-.757c-.744 0-.977.466-.977.944v1.133h1.664l-.266 1.744h-1.399v4.219C13.807 15.768 16 13.27 16 10.258"
    />
  </svg>
);
export default SvgFacebook;
