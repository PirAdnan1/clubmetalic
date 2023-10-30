import * as React from "react"
const ButtonWhite = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={295}
    height={295}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        width={175}
        height={175}
        x={60}
        y={60}
        fill="url(#b)"
        rx={87.5}
        shapeRendering="crispEdges"
      />
      <g filter="url(#c)">
        <rect
          width={150}
          height={150}
          x={72.5}
          y={72.5}
          fill="#fff"
          fillOpacity={0.01}
          rx={75}
          shapeRendering="crispEdges"
        />
        <g filter="url(#d)">
          <rect
            width={110}
            height={110}
            x={92.5}
            y={92.5}
            fill="url(#e)"
            rx={55}
          />
        </g>
        <rect
          width={149}
          height={149}
          x={73}
          y={73}
          stroke="#C1D3F5"
          rx={74.5}
          shapeRendering="crispEdges"
        />
      </g>
    </g>
    <defs>
      <filter
        id="a"
        width={295}
        height={295}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4} dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.823529 0 0 0 0 0.866667 0 0 0 0 0.94902 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_17_4127" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-4} dy={-4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend
          in2="effect1_dropShadow_17_4127"
          result="effect2_dropShadow_17_4127"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-10} dy={-10} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend
          in2="effect2_dropShadow_17_4127"
          result="effect3_dropShadow_17_4127"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={10} dy={10} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.827451 0 0 0 0 0.866667 0 0 0 0 0.941176 0 0 0 1 0" />
        <feBlend
          in2="effect3_dropShadow_17_4127"
          result="effect4_dropShadow_17_4127"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-20} dy={-20} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend
          in2="effect4_dropShadow_17_4127"
          result="effect5_dropShadow_17_4127"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={20} dy={20} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.85098 0 0 0 0 0.882353 0 0 0 0 0.94902 0 0 0 1 0" />
        <feBlend
          in2="effect5_dropShadow_17_4127"
          result="effect6_dropShadow_17_4127"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect6_dropShadow_17_4127"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-4} dy={-4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.827451 0 0 0 0 0.866667 0 0 0 0 0.941176 0 0 0 1 0" />
        <feBlend in2="shape" result="effect7_innerShadow_17_4127" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="effect7_innerShadow_17_4127"
          result="effect8_innerShadow_17_4127"
        />
      </filter>
      <filter
        id="c"
        width={151}
        height={151}
        x={72.5}
        y={72.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1} dy={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_17_4127" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_17_4127"
          result="shape"
        />
      </filter>
      <filter
        id="d"
        width={230}
        height={230}
        x={32.5}
        y={32.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4} dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.823529 0 0 0 0 0.866667 0 0 0 0 0.94902 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_17_4127" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-4} dy={-4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend
          in2="effect1_dropShadow_17_4127"
          result="effect2_dropShadow_17_4127"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-10} dy={-10} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend
          in2="effect2_dropShadow_17_4127"
          result="effect3_dropShadow_17_4127"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={10} dy={10} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.827451 0 0 0 0 0.866667 0 0 0 0 0.941176 0 0 0 1 0" />
        <feBlend
          in2="effect3_dropShadow_17_4127"
          result="effect4_dropShadow_17_4127"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-20} dy={-20} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend
          in2="effect4_dropShadow_17_4127"
          result="effect5_dropShadow_17_4127"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={20} dy={20} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.85098 0 0 0 0 0.882353 0 0 0 0 0.94902 0 0 0 1 0" />
        <feBlend
          in2="effect5_dropShadow_17_4127"
          result="effect6_dropShadow_17_4127"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect6_dropShadow_17_4127"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-4} dy={-4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.827451 0 0 0 0 0.866667 0 0 0 0 0.941176 0 0 0 1 0" />
        <feBlend in2="shape" result="effect7_innerShadow_17_4127" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="effect7_innerShadow_17_4127"
          result="effect8_innerShadow_17_4127"
        />
      </filter>
      <linearGradient
        id="b"
        x1={235}
        x2={60}
        y1={235}
        y2={60}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.685} stopColor="#DFE7F7" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={202.5}
        x2={92.5}
        y1={202.5}
        y2={92.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.685} stopColor="#DFE7F7" />
      </linearGradient>
    </defs>
  </svg>
)
export default ButtonWhite
