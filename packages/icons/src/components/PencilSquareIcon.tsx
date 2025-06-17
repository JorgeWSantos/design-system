import type { SVGProps } from 'react';
const PencilSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.253 2.91a.75.75 0 0 1 0 1.059L21.69 5.535l-3-3L20.253.969a.75.75 0 0 1 1.06 0l1.94 1.94m-2.625 3.684-3-3-10.22 10.22a.75.75 0 0 0-.18.295l-1.208 3.62a.375.375 0 0 0 .474.475l3.62-1.208a.75.75 0 0 0 .295-.18l10.22-10.22z"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      fillRule="evenodd"
      d="M1.5 20.25a2.25 2.25 0 0 0 2.25 2.25h16.5a2.25 2.25 0 0 0 2.25-2.25v-9a.75.75 0 1 0-1.5 0v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 3.75 3h9.75a.75.75 0 1 0 0-1.5H3.75A2.25 2.25 0 0 0 1.5 3.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default PencilSquareIcon;
