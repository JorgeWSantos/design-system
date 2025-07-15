import type { SVGProps } from 'react';
const FileEarmarkCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.281 11.781a.751.751 0 0 0-1.062-1.062l-3.969 3.97-1.719-1.72a.75.75 0 1 0-1.062 1.062l2.25 2.25a.75.75 0 0 0 1.062 0z"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M21 21V6.75L14.25 0H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3M14.25 4.5a2.25 2.25 0 0 0 2.25 2.25h3V21a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 21V3A1.5 1.5 0 0 1 6 1.5h8.25z"
    />
  </svg>
);
export default FileEarmarkCheckIcon;
