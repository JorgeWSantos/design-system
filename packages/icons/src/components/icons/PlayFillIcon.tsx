import type { SVGProps } from 'react';
const PlayFillIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.394 13.046 7.85 18.584c-.81.469-1.85-.1-1.85-1.046V6.462c0-.945 1.038-1.515 1.85-1.044l9.544 5.538a1.203 1.203 0 0 1 0 2.09"
    />
  </svg>
);
export default PlayFillIcon;
