import type { SVGProps } from 'react';
const ForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.253 8.27a.216.216 0 0 0-.303.2v1.505a.75.75 0 0 1-.75.75H3.75v4.35h9.45a.75.75 0 0 1 .75.75v1.504c0 .162.165.264.303.201l5.976-4.4.063-.041a.22.22 0 0 0 0-.378l-.063-.042zm-1.803.2a1.717 1.717 0 0 1 2.65-1.44l5.992 4.41a1.72 1.72 0 0 1 0 2.92L15.1 18.77a1.716 1.716 0 0 1-2.651-1.44v-.755H3a.75.75 0 0 1-.75-.75v-5.85a.75.75 0 0 1 .75-.75h9.45z"
    />
  </svg>
);
export default ForwardIcon;
