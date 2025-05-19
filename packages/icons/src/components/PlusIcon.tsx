import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 8 8"
    {...props}
  >
    <path
      fill="#001007"
      fillOpacity={0.5}
      d="M4 .5a.44.44 0 0 1 .438.438v2.625h2.625a.437.437 0 1 1 0 .874H4.438v2.625a.437.437 0 1 1-.875 0V4.438H.938a.437.437 0 1 1 0-.875h2.625V.938A.437.437 0 0 1 4 .5"
    />
  </svg>
);
export default SvgPlus;
