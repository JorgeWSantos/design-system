import type { SVGProps } from 'react';
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.206 12 7.5 6.95v10.1zm1.188-1.044a1.203 1.203 0 0 1 0 2.088L7.85 18.582c-.78.453-1.85-.065-1.85-1.044V6.462c0-.98 1.07-1.497 1.85-1.044z"
    />
  </svg>
);
export default PlayIcon;
