import type { SVGProps } from 'react';
const FileXFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#file-x-fill_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M18 0H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3m-7.719 9.219L12 10.939l1.719-1.72a.75.75 0 1 1 1.062 1.062L13.061 12l1.72 1.719a.75.75 0 0 1-1.062 1.062L12 13.061l-1.719 1.72a.751.751 0 0 1-1.062-1.062L10.939 12l-1.72-1.719a.75.75 0 1 1 1.062-1.062"
      />
    </g>
    <defs>
      <clipPath id="file-x-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FileXFillIcon;
