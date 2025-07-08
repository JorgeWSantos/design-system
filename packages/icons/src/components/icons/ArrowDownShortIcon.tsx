import type { SVGProps } from 'react';
const ArrowDownShortIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6a.75.75 0 0 1 .75.75v8.69l3.219-3.221a.752.752 0 0 1 1.062 1.062l-4.5 4.5a.75.75 0 0 1-1.062 0l-4.5-4.5a.75.75 0 1 1 1.062-1.062l3.219 3.22V6.75A.75.75 0 0 1 12 6"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowDownShortIcon;
