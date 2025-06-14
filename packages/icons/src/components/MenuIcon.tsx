import type { SVGProps } from 'react';
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 18"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.75}
      fillRule="evenodd"
      d="M0 17a1 1 0 0 1 1-1h20a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1m0-8a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m0-8a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default MenuIcon;
