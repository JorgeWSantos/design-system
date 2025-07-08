import type { SVGProps } from 'react';
const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#google_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M23.318 9.837c.14.806.21 1.622.208 2.44 0 3.65-1.305 6.737-3.576 8.827h.003C17.967 22.938 15.237 24 12 24a12 12 0 0 1 0-24 11.53 11.53 0 0 1 8.028 3.123L16.602 6.55A6.52 6.52 0 0 0 12 4.75c-3.13 0-5.79 2.112-6.738 4.956a7.2 7.2 0 0 0 0 4.595h.005c.952 2.84 3.607 4.951 6.738 4.951 1.616 0 3.005-.414 4.082-1.146h-.004a5.55 5.55 0 0 0 2.399-3.646H12v-4.62h11.317z"
      />
    </g>
    <defs>
      <clipPath id="google_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GoogleIcon;
