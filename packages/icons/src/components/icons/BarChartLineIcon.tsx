import type { SVGProps } from 'react';
const BarChartLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 3A1.5 1.5 0 0 1 18 1.5h3A1.5 1.5 0 0 1 22.5 3v18h.75a.75.75 0 1 1 0 1.5H.75a.75.75 0 1 1 0-1.5h.75v-4.5A1.5 1.5 0 0 1 3 15h3a1.5 1.5 0 0 1 1.5 1.5V21H9V10.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5V21h1.5zM18 21h3V3h-3zm-4.5 0V10.5h-3V21zM6 21v-4.5H3V21z"
    />
  </svg>
);
export default BarChartLineIcon;
