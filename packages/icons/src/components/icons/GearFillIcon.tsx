import type { SVGProps } from 'react';
const GearFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gear-fill_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M14.108 1.575c-.62-2.1-3.596-2.1-4.216 0l-.15.51a2.196 2.196 0 0 1-3.157 1.308l-.465-.255c-1.924-1.047-4.029 1.058-2.98 2.98l.253.467a2.196 2.196 0 0 1-1.308 3.157l-.51.15c-2.1.62-2.1 3.596 0 4.216l.51.15a2.196 2.196 0 0 1 1.308 3.157l-.255.465c-1.047 1.925 1.058 4.029 2.98 2.98l.467-.253a2.196 2.196 0 0 1 3.157 1.308l.15.51c.62 2.1 3.596 2.1 4.216 0l.15-.51a2.196 2.196 0 0 1 3.157-1.308l.465.255c1.925 1.047 4.029-1.057 2.98-2.98l-.253-.467a2.197 2.197 0 0 1 1.308-3.157l.51-.15c2.1-.62 2.1-3.596 0-4.216l-.51-.15a2.196 2.196 0 0 1-1.308-3.157l.255-.465c1.047-1.924-1.057-4.029-2.98-2.98l-.467.253a2.196 2.196 0 0 1-3.157-1.308zM12 16.395a4.395 4.395 0 1 1 3.107-1.29A4.4 4.4 0 0 1 12 16.392z"
      />
    </g>
    <defs>
      <clipPath id="gear-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GearFillIcon;
