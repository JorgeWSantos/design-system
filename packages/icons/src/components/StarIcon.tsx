import type { SVGProps } from 'react';
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#star_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M4.299 22.275c-.117.666.54 1.187 1.119.89l6.585-3.384 6.583 3.384c.58.297 1.236-.224 1.12-.889l-1.246-7.094 5.283-5.034c.495-.471.24-1.332-.423-1.425l-7.347-1.044-3.276-6.491a.77.77 0 0 0-1.39 0L8.03 7.68.684 8.724c-.662.093-.918.954-.425 1.425l5.285 5.034-1.245 7.095zm7.357-4.15-5.529 2.84 1.041-5.935a.85.85 0 0 0-.244-.757l-4.36-4.155 6.079-.864a.79.79 0 0 0 .59-.432L12 3.335l2.77 5.487a.79.79 0 0 0 .59.432l6.078.862-4.36 4.155a.85.85 0 0 0-.244.759l1.041 5.935-5.529-2.84a.76.76 0 0 0-.691 0z"
      />
    </g>
    <defs>
      <clipPath id="star_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default StarIcon;
