import type { SVGProps } from 'react';
const PlayBtnFillIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 18V6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3M10.185 7.64A.75.75 0 0 0 9 8.25v7.5a.75.75 0 0 0 1.185.61l5.25-3.75a.75.75 0 0 0 0-1.22z"
    />
  </svg>
);
export default PlayBtnFillIcon;
