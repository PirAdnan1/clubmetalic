import * as React from "react"

const Dropdown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#002FA7"
        d="M9.756 4.102 5.969 7.889 2.168 4.102.91 5.359l5.045 5.305 5.059-5.305-1.258-1.257Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.91 14h14V0h-14z" />
      </clipPath>
    </defs>
  </svg>
)
export default Dropdown
