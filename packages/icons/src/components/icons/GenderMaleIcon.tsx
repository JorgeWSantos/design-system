import type { SVGProps } from 'react';
const GenderMaleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 3a.75.75 0 1 1 0-1.5h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 1 1-1.5 0V4.06l-6.193 6.194a7.5 7.5 0 1 1-1.061-1.06L19.939 3zM9 9a6 6 0 1 0 0 12A6 6 0 0 0 9 9"
      clipRule="evenodd"
    />
  </svg>
);
export default GenderMaleIcon;
