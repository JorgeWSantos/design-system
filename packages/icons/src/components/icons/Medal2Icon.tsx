import type { SVGProps } from 'react';
const Medal2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <g filter="url(#medal2_svg__a)">
      <path
        fill={props?.fill ? props.fill : 'url(#medal2_svg__b)'}
        d="M10.362 3.963a1.38 1.38 0 0 1 1.943 0l.45.445a1.38 1.38 0 0 0 1.084.395l.631-.052a1.38 1.38 0 0 1 1.488 1.248l.058.63c.037.403.248.768.578 1.001l.516.365a1.38 1.38 0 0 1 .338 1.913l-.361.52a1.38 1.38 0 0 0-.2 1.137l.16.613a1.38 1.38 0 0 1-.97 1.682l-.611.166c-.39.106-.713.377-.885.742l-.27.573a1.38 1.38 0 0 1-1.825.664l-.575-.265a1.38 1.38 0 0 0-1.155 0l-.575.265a1.38 1.38 0 0 1-1.825-.664l-.27-.572a1.38 1.38 0 0 0-.885-.743l-.61-.166a1.38 1.38 0 0 1-.971-1.682l.16-.613a1.38 1.38 0 0 0-.2-1.137l-.36-.52a1.38 1.38 0 0 1 .337-1.913l.517-.365c.33-.233.54-.598.577-1L6.709 6A1.38 1.38 0 0 1 8.197 4.75l.63.052a1.38 1.38 0 0 0 1.086-.395z"
      />
      <path
        stroke="#8C421D"
        strokeWidth={0.7}
        d="M10.609 4.21a1.03 1.03 0 0 1 1.45 0l.448.447c.36.356.857.537 1.362.495l.63-.052a1.03 1.03 0 0 1 1.11.931l.059.631c.046.504.31.962.723 1.254l.518.365c.46.326.573.963.25 1.427l-.36.52a1.73 1.73 0 0 0-.252 1.426l.162.613a1.03 1.03 0 0 1-.725 1.255l-.61.166a1.73 1.73 0 0 0-1.11.931l-.27.572a1.03 1.03 0 0 1-1.362.496l-.575-.264a1.73 1.73 0 0 0-1.447 0l-.575.264a1.03 1.03 0 0 1-1.363-.496l-.27-.572a1.73 1.73 0 0 0-1.109-.93l-.61-.168a1.03 1.03 0 0 1-.725-1.254l.162-.613a1.73 1.73 0 0 0-.252-1.425l-.36-.521c-.323-.464-.21-1.1.25-1.427l.518-.365A1.73 1.73 0 0 0 7 6.662l.057-.63a1.03 1.03 0 0 1 1.11-.932l.631.052a1.73 1.73 0 0 0 1.362-.495z"
      />
    </g>
    <defs>
      <linearGradient
        id="medal2_svg__b"
        x1={6.574}
        x2={16.117}
        y1={15.32}
        y2={5.508}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8C421D" />
        <stop offset={0.325} stopColor="#FBE67B" />
        <stop offset={0.535} stopColor="#FCFBE7" />
        <stop offset={0.77} stopColor="#F7D14E" />
        <stop offset={1} stopColor="#D4A041" />
      </linearGradient>
      <filter
        id="medal2_svg__a"
        width={20.721}
        height={20.569}
        x={0.973}
        y={0.563}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.122559 0 0 0 0 0.0958559 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2954_12113" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_2954_12113" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default Medal2Icon;
