import type { SVGProps } from 'react';
const FlagFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#flag-fill_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M22.167.128A.75.75 0 0 1 22.5.75V12a.75.75 0 0 1-.471.696L21.75 12l.279.696-.005.002-.009.004-.034.014q-.296.117-.596.225c-.396.142-.946.334-1.57.524-1.224.379-2.818.785-4.065.785-1.27 0-2.322-.42-3.237-.787l-.042-.015c-.951-.383-1.761-.698-2.721-.698-1.05 0-2.457.345-3.655.716q-.806.251-1.595.547v9.237a.75.75 0 1 1-1.5 0V.75a.75.75 0 0 1 1.5 0v.423c.339-.119.744-.255 1.185-.39C6.909.408 8.505 0 9.75 0c1.26 0 2.286.416 3.182.779l.064.026c.933.377 1.746.695 2.754.695 1.05 0 2.457-.345 3.656-.715A29 29 0 0 0 21.429.07l.029-.011.006-.003h.001"
      />
    </g>
    <defs>
      <clipPath id="flag-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FlagFillIcon;
