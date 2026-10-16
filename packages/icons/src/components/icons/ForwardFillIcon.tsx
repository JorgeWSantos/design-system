import type { SVGProps } from 'react';
const ForwardFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="m14.655 18.165 6.018-4.43a.97.97 0 0 0 0-1.67l-6.016-4.43a.966.966 0 0 0-1.457.836v1.504H3v5.85h10.2v1.505a.965.965 0 0 0 1.455.835"
    />
  </svg>
);
export default ForwardFillIcon;
