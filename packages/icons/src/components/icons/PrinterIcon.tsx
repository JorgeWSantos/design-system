import type { SVGProps } from 'react';
const PrinterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill={props?.fill ? props.fill : '#1E1E1E'} d="M3.75 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M7.5 1.5a3 3 0 0 0-3 3v3H3a3 3 0 0 0-3 3V15a3 3 0 0 0 3 3h1.5v1.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V18H21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-1.5v-3a3 3 0 0 0-3-3zM6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v3H6zM7.5 12a3 3 0 0 0-3 3v1.5H3A1.5 1.5 0 0 1 1.5 15v-4.5A1.5 1.5 0 0 1 3 9h18a1.5 1.5 0 0 1 1.5 1.5V15a1.5 1.5 0 0 1-1.5 1.5h-1.5V15a3 3 0 0 0-3-3zM18 15v4.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5V15a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 15"
    />
  </svg>
);
export default PrinterIcon;
