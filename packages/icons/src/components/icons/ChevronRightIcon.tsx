import type { SVGProps } from 'react';
const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M6.969 2.469a.75.75 0 0 1 1.062 0l9 9a.75.75 0 0 1 0 1.062l-9 9a.751.751 0 0 1-1.062-1.062L15.439 12 6.97 3.531a.75.75 0 0 1 0-1.062"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronRightIcon;
