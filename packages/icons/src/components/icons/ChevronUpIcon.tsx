import type { SVGProps } from 'react';
const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.469 6.969a.75.75 0 0 1 1.062 0l9 9a.75.75 0 0 1-1.062 1.062L12 8.561l-8.469 8.47a.751.751 0 0 1-1.062-1.062z"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronUpIcon;
