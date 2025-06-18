import type { SVGProps } from 'react';
const FileEarmarkTextIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 10.5a.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M14.25 0H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6.75zm0 1.5v3a2.25 2.25 0 0 0 2.25 2.25h3V21a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 21V3A1.5 1.5 0 0 1 6 1.5z"
    />
  </svg>
);
export default FileEarmarkTextIcon;
