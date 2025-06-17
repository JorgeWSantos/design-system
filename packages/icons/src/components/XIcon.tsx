import type { SVGProps } from 'react';
const XIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.969 6.969a.75.75 0 0 1 1.062 0L12 10.939l3.969-3.97A.75.75 0 1 1 17.03 8.03L13.06 12l3.97 3.969a.752.752 0 0 1-1.062 1.062l-3.97-3.97-3.968 3.97a.753.753 0 0 1-1.225-.244.75.75 0 0 1 .163-.818l3.97-3.97-3.97-3.968a.75.75 0 0 1 0-1.062"
    />
  </svg>
);
export default XIcon;
