import type { SVGProps } from 'react';
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 1 1 0 1.5h-4.5v4.5a.75.75 0 1 1-1.5 0v-4.5h-4.5a.75.75 0 1 1 0-1.5h4.5v-4.5A.75.75 0 0 1 12 6"
    />
  </svg>
);
export default PlusIcon;
