import type { SVGProps } from 'react';
const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props?.fill ? props.fill : '#000'}
      d="M18.75 6.375h-3.375V3A1.875 1.875 0 0 0 13.5 1.125h-3A1.875 1.875 0 0 0 8.625 3v3.375H5.25A1.875 1.875 0 0 0 3.375 8.25v3a1.875 1.875 0 0 0 1.875 1.875h3.375V21a1.875 1.875 0 0 0 1.875 1.875h3A1.875 1.875 0 0 0 15.375 21v-7.875h3.375a1.875 1.875 0 0 0 1.875-1.875v-3a1.875 1.875 0 0 0-1.875-1.875m-.375 4.5H14.25A1.125 1.125 0 0 0 13.125 12v8.625h-2.25V12a1.125 1.125 0 0 0-1.125-1.125H5.625v-2.25H9.75A1.125 1.125 0 0 0 10.875 7.5V3.375h2.25V7.5a1.125 1.125 0 0 0 1.125 1.125h4.125z"
    />
  </svg>
);
export default CrossIcon;
