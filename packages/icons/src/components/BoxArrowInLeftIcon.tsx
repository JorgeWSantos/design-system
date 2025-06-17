import type { SVGProps } from 'react';
const BoxArrowInLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 5.25a.75.75 0 0 0-.75-.75h-12a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 .75.75h12a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 1 1.5 0v3A2.25 2.25 0 0 1 14.25 21h-12A2.25 2.25 0 0 1 0 18.75V5.25A2.25 2.25 0 0 1 2.25 3h12a2.25 2.25 0 0 1 2.25 2.25v3a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      fillRule="evenodd"
      d="M6.219 12.531a.75.75 0 0 1 0-1.062l4.5-4.5a.75.75 0 1 1 1.062 1.062L8.56 11.25H21.75a.75.75 0 1 1 0 1.5H8.56l3.22 3.219a.752.752 0 0 1-1.061 1.062z"
      clipRule="evenodd"
    />
  </svg>
);
export default BoxArrowInLeftIcon;
