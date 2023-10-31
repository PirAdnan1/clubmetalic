import * as React from "react"
const SmallTree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={85}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#E3EDF7"
        d="M24.63 49.261c13.604 0 24.631-11.027 24.631-24.63C49.261 11.027 38.234 0 24.631 0 11.027 0 0 11.027 0 24.63c0 13.604 11.027 24.631 24.63 24.631Z"
      />
    </g>
    <path
      fill="#002FA7"
      d="m17.976 60.598 6.059 3.754V38.974l-6.791-4.209a2.634 2.634 0 0 1-1.15-1.53c.649-.124 1.32 0 1.882.349l6.059 3.754v-9.841c0-1.904.233-3.8.695-5.647.462 1.847.695 3.743.695 5.647v16.062l8.939-5.538a4.38 4.38 0 0 1 2.379-.657 4.381 4.381 0 0 1-1.647 1.838l-9.67 5.993v60.018h-1.391V65.988l-6.791-4.208a2.634 2.634 0 0 1-1.15-1.53c.649-.124 1.32 0 1.882.348Z"
    />
    <defs>
      <filter
        id="a"
        width={76.261}
        height={80.261}
        x={-11}
        y={-11}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-14.427} dy={-53} />
        <feGaussianBlur stdDeviation={5.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.534167 0 0 0 0 0.645967 0 0 0 0 0.749167 0 0 0 0.5 0" />
        <feBlend in2="shape" result="effect1_innerShadow_17_4559" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={16} dy={20} />
        <feGaussianBlur stdDeviation={18} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_17_4559"
          result="effect2_innerShadow_17_4559"
        />
      </filter>
    </defs>
  </svg>
)
export default SmallTree
