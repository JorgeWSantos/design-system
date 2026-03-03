import type { SVGProps } from 'react';
const EyeSlashFillIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.185 19.368-2.421-2.422a5.251 5.251 0 0 1-6.711-6.712l-3.09-3.09C1.407 9.418 0 12 0 12s4.5 8.25 12 8.25a10.5 10.5 0 0 0 4.185-.882M7.815 4.632A10.5 10.5 0 0 1 12 3.75c7.5 0 12 8.25 12 8.25s-1.408 2.582-3.962 4.857l-3.093-3.093a5.251 5.251 0 0 0-6.71-6.711l-2.42-2.42z"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M8.288 11.469a3.75 3.75 0 0 0 4.243 4.244l-4.245-4.244zm7.425 1.062-4.244-4.245a3.75 3.75 0 0 1 4.244 4.244zm4.756 9-18-18 1.062-1.062 18 18z"
    />
  </svg>
);
export default EyeSlashFillIcon;
