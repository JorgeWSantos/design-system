import type { SVGProps } from 'react';
const CheckAllIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill={props?.fill ? props.fill : '#001007'}
      fillOpacity={0.5}
      d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.08-.02l3.991-4.99a.75.75 0 1 0-1.09-1.028L9.476 9.417l-.485-.486z"
    />
  </svg>
);
export default CheckAllIcon;
