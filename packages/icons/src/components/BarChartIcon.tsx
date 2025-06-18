import type { SVGProps } from 'react';
const BarChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 16.5H3V21h3zm7.5-6h-3V21h3zM21 3v18h-3V3zm-3-1.5A1.5 1.5 0 0 0 16.5 3v18a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 21 1.5zm-9 9A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5V21a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 21zm-7.5 6A1.5 1.5 0 0 1 3 15h3a1.5 1.5 0 0 1 1.5 1.5V21A1.5 1.5 0 0 1 6 22.5H3A1.5 1.5 0 0 1 1.5 21z"
    />
  </svg>
);
export default BarChartIcon;
