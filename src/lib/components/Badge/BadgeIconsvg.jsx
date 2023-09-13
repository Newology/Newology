import React from "react";
export const BadgeIcon = ({width, height, className, color, ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20.569 20.335"
  >
    <g
      id="Icon_feather-check-circle"
      data-name="Icon feather-check-circle"
      transform="translate(-2.008 0.944)"
    >
      <path
        id="Path_57301"
        data-name="Path 57301"
        d="M21.517,11.4v.852a9.258,9.258,0,1,1-5.49-8.462"
        transform="translate(0 -2.991)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        id="Path_57302"
        data-name="Path 57302"
        d="M25.536,6l-9.258,9.268L13.5,12.49"
        transform="translate(-4.019 -4.143)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </g>
  </svg>
);
