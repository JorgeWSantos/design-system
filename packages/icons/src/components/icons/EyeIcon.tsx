import type { SVGProps } from 'react';
const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 12s-4.5-8.25-12-8.25S0 12 0 12s4.5 8.25 12 8.25S24 12 24 12M1.76 12a19.7 19.7 0 0 1 2.49-3.065C6.18 7.002 8.82 5.25 12 5.25s5.819 1.752 7.752 3.685c.93.936 1.765 1.963 2.49 3.065q-.13.195-.293.432a20 20 0 0 1-2.197 2.633C17.819 16.998 15.179 18.75 12 18.75c-3.18 0-5.818-1.752-7.752-3.685A19.7 19.7 0 0 1 1.758 12z"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M6.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0"
    />
  </svg>
);
export default EyeIcon;
