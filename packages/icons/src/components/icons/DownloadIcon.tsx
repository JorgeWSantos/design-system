import type { SVGProps } from 'react';
const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M.75 14.85a.75.75 0 0 1 .75.75v3.75a1.5 1.5 0 0 0 1.5 1.5h18a1.5 1.5 0 0 0 1.5-1.5V15.6a.75.75 0 1 1 1.5 0v3.75a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V15.6a.75.75 0 0 1 .75-.75"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M11.469 17.781a.75.75 0 0 0 1.062 0l4.5-4.5a.75.75 0 0 0-1.062-1.062l-3.219 3.22V2.25a.75.75 0 1 0-1.5 0v13.19l-3.219-3.221a.751.751 0 0 0-1.062 1.062z"
    />
  </svg>
);
export default DownloadIcon;
