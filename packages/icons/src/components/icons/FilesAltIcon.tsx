import type { SVGProps } from 'react';
const FilesAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#files-alt_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M16.5 0h-12a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3-3m3 4.5A1.5 1.5 0 0 1 21 6v12a1.5 1.5 0 0 1-1.5 1.5zM3 3a1.5 1.5 0 0 1 1.5-1.5h12A1.5 1.5 0 0 1 18 3v18a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 3 21z"
      />
    </g>
    <defs>
      <clipPath id="files-alt_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FilesAltIcon;
