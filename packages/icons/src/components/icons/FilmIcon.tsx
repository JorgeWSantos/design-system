import type { SVGProps } from 'react';
const FilmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#film_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5zm6 0v9h12v-9zm12 12H6v9h12zM1.5 1.5v3h3v-3zm3 4.5h-3v3h3zm-3 4.5v3h3v-3zm3 4.5h-3v3h3zm-3 4.5v3h3v-3zm21-18h-3v3h3zm-3 4.5v3h3V6zm3 4.5h-3v3h3zm-3 4.5v3h3v-3zm3 4.5h-3v3h3z"
      />
    </g>
    <defs>
      <clipPath id="film_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FilmIcon;
