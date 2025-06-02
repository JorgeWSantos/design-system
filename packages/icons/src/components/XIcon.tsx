import type { SVGProps } from 'react';
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.75}
      d="M.292.292a1 1 0 0 1 1.416 0L7 5.586 12.292.292a1.002 1.002 0 0 1 1.416 1.416L8.414 7l5.294 5.292a1 1 0 0 1-.708 1.71 1 1 0 0 1-.708-.294L7 8.414l-5.292 5.294a1.002 1.002 0 0 1-1.416-1.416L5.586 7 .292 1.708a1 1 0 0 1 0-1.416"
    />
  </svg>
);
export default XIcon;
