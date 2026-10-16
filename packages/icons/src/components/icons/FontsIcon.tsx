import type { SVGProps } from 'react';
const FontsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.387 4.5H5.622l-.124 3.69h.718c.39-2.316 1.137-2.674 4.04-2.767l.636-.02v11.74c0 .995-.216 1.23-1.95 1.385v.78h6.123v-.78c-1.743-.154-1.96-.39-1.96-1.384V5.403l.647.02c2.901.093 3.651.451 4.04 2.768h.718z"
    />
  </svg>
);
export default FontsIcon;
