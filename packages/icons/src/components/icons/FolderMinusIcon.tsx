import type { SVGProps } from 'react';
const FolderMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m.75 4.5.06 1.305a3 3 0 0 0-.513 1.967l.955 10.5A3 3 0 0 0 4.24 21h9.26v-1.5H4.24a1.5 1.5 0 0 1-1.493-1.365l-.955-10.5A1.5 1.5 0 0 1 3.285 6h17.43a1.5 1.5 0 0 1 1.494 1.635l-.4 4.365h1.508l.384-4.228A3 3 0 0 0 20.715 4.5h-5.973a3 3 0 0 1-2.121-.879l-1.242-1.242A3 3 0 0 0 9.258 1.5H3.75a3 3 0 0 0-3 3M9.258 3a1.5 1.5 0 0 1 1.06.44l1.06 1.06H3.286c-.36 0-.705.063-1.025.18l-.01-.21A1.5 1.5 0 0 1 3.75 3z"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M16.5 17.25a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1-.75-.75"
    />
  </svg>
);
export default FolderMinusIcon;
