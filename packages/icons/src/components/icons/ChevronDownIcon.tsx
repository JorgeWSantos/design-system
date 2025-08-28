import type { SVGProps } from 'react';
const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.469 6.969a.75.75 0 0 1 1.062 0L12 15.439l8.469-8.47a.75.75 0 1 1 1.062 1.062l-9 9a.75.75 0 0 1-1.062 0l-9-9a.75.75 0 0 1 0-1.062"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronDownIcon;
