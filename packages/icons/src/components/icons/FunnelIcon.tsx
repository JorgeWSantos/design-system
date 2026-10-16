import type { SVGProps } from 'react';
const FunnelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.25 2.25A.75.75 0 0 1 3 1.5h18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.192.501L15 13.038v7.212a.75.75 0 0 1-.513.711l-4.5 1.5A.75.75 0 0 1 9 21.75v-8.712L2.442 5.751a.75.75 0 0 1-.192-.501zm1.5.75v1.962l6.558 7.287a.75.75 0 0 1 .192.501v7.959l3-.999v-6.96a.75.75 0 0 1 .192-.501l6.558-7.287V3z"
    />
  </svg>
);
export default FunnelIcon;
