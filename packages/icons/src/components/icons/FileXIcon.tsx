import type { SVGProps } from 'react';
const FileXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#file-x_svg__a)">
      <path d="M9.219 9.219a.75.75 0 0 1 1.062 0L12 10.939l1.719-1.72a.75.75 0 1 1 1.062 1.062L13.06 12l1.72 1.719a.75.75 0 0 1-1.062 1.062l-1.72-1.72-1.718 1.72a.751.751 0 0 1-1.062-1.062l1.72-1.72-1.72-1.718a.75.75 0 0 1 0-1.062" />
      <path d="M6 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm0 1.5h12A1.5 1.5 0 0 1 19.5 3v18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 21V3A1.5 1.5 0 0 1 6 1.5" />
    </g>
    <defs>
      <clipPath id="file-x_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FileXIcon;
