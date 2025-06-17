import type { SVGProps } from 'react';
const AwardFillIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 0 2.503 1.296 2.787.423 1.263 2.52 2.006 1.98L20.099 9l.46 2.781-2.006 1.98-1.263 2.52-2.787.423L12 18l-2.504-1.296-2.787-.423-1.263-2.52-2.005-1.98L3.9 9l-.46-2.781 2.006-1.98 1.263-2.52 2.787-.423z"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M6 17.691V24l6-1.5 6 1.5v-6.309l-3.027.459L12 19.689 9.027 18.15z"
    />
  </svg>
);
export default AwardFillIcon;
