import type { SVGProps } from 'react';
const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.03 2.469a.75.75 0 0 1 0 1.062L8.56 12l8.47 8.469a.75.75 0 0 1-1.061 1.062l-9-9a.75.75 0 0 1 0-1.062l9-9a.75.75 0 0 1 1.062 0"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronLeftIcon;
