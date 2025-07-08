import type { SVGProps } from 'react';
const FileTextIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 6a.75.75 0 0 0 0 1.5h9a.75.75 0 1 0 0-1.5zm-.75 3.75A.75.75 0 0 1 7.5 9h9a.75.75 0 1 1 0 1.5h-9a.75.75 0 0 1-.75-.75M7.5 12a.75.75 0 1 0 0 1.5h9a.75.75 0 1 0 0-1.5zm0 3a.75.75 0 1 0 0 1.5H12a.75.75 0 1 0 0-1.5z"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M3 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm15-1.5H6A1.5 1.5 0 0 0 4.5 3v18A1.5 1.5 0 0 0 6 22.5h12a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 18 1.5"
    />
  </svg>
);
export default FileTextIcon;
