import type { SVGProps } from 'react';
const MedalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 129 116"
    {...props}
  >
    <g filter="url(#medal_svg__a)">
      <path
        fill={props?.fill ? props.fill : 'url(#medal_svg__b)'}
        d="M51.93 14.017a8.62 8.62 0 0 1 12.14 0l4.48 4.443a8.62 8.62 0 0 0 6.784 2.469l6.288-.523a8.62 8.62 0 0 1 9.299 7.803l.577 6.283a8.62 8.62 0 0 0 3.61 6.252l5.153 3.641a8.62 8.62 0 0 1 2.108 11.955l-3.597 5.184a8.62 8.62 0 0 0-1.254 7.11l1.607 6.101a8.62 8.62 0 0 1-6.07 10.513l-6.087 1.66a8.62 8.62 0 0 0-5.53 4.64l-2.692 5.706a8.62 8.62 0 0 1-11.406 4.152l-5.73-2.642a8.62 8.62 0 0 0-7.22 0l-5.73 2.642a8.62 8.62 0 0 1-11.406-4.152l-2.692-5.707a8.62 8.62 0 0 0-5.53-4.64l-6.087-1.66a8.62 8.62 0 0 1-6.07-10.512l1.607-6.102a8.62 8.62 0 0 0-1.254-7.109l-3.597-5.184a8.62 8.62 0 0 1 2.108-11.955l5.153-3.641a8.62 8.62 0 0 0 3.61-6.252l.577-6.283a8.62 8.62 0 0 1 9.299-7.803l6.288.523a8.62 8.62 0 0 0 6.784-2.47z"
      />
      <path
        stroke="#8C421D"
        strokeWidth={3.125}
        d="M53.03 15.127a7.06 7.06 0 0 1 9.94 0l4.48 4.442a10.18 10.18 0 0 0 8.014 2.916l6.288-.522a7.06 7.06 0 0 1 7.613 6.389l.577 6.283a10.18 10.18 0 0 0 4.264 7.385l5.153 3.641a7.06 7.06 0 0 1 1.726 9.788l-3.597 5.184a10.19 10.19 0 0 0-1.481 8.398l1.607 6.102a7.06 7.06 0 0 1-4.97 8.607l-6.087 1.66a10.18 10.18 0 0 0-6.533 5.48l-2.691 5.708a7.06 7.06 0 0 1-9.339 3.4l-5.73-2.642a10.18 10.18 0 0 0-8.528 0l-5.73 2.641a7.06 7.06 0 0 1-9.339-3.4l-2.691-5.706a10.18 10.18 0 0 0-6.533-5.482l-6.088-1.659a7.06 7.06 0 0 1-4.97-8.607l1.608-6.102c.759-2.88.217-5.95-1.481-8.398l-3.597-5.184a7.06 7.06 0 0 1 1.726-9.788l5.153-3.642a10.18 10.18 0 0 0 4.264-7.384l.577-6.283a7.06 7.06 0 0 1 7.613-6.39l6.288.523c2.97.247 5.898-.818 8.014-2.916z"
      />
    </g>
    <defs>
      <linearGradient
        id="medal_svg__b"
        x1={24}
        x2={92.167}
        y1={96}
        y2={25.917}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8C421D" />
        <stop offset={0.325} stopColor="#FBE67B" />
        <stop offset={0.535} stopColor="#FCFBE7" />
        <stop offset={0.77} stopColor="#F7D14E" />
        <stop offset={1} stopColor="#D4A041" />
      </linearGradient>
      <filter
        id="medal_svg__a"
        width={141.814}
        height={140.682}
        x={-12.907}
        y={-7.232}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={6.25} />
        <feGaussianBlur stdDeviation={12.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.122559 0 0 0 0 0.0958559 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1211_15009" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1211_15009" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default MedalIcon;
