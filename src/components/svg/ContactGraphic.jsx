import React from "react";

import styled from "styled-components";

const Svg = styled.svg`
  .cls-1 {
    fill: ${(props) => props.theme.secondaryColor};
  }
  .cls-2 {
    fill: ${(props) => props.theme.logo};
  }
`;

export default function ContactGraphic() {
  return (
    <Svg
      id="Group_79"
      data-name="Group 79"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 310.01 282.66"
    >
      <rect
        id="Rectangle_209"
        data-name="Rectangle 209"
        className="cls-1"
        x="32.01"
        y="48"
        width="223"
        height="223"
      />
      <g id="Group_13" data-name="Group 13">
        <circle
          id="Ellipse_1"
          data-name="Ellipse 1"
          className="cls-2"
          cx="150.27"
          cy="158.36"
          r="20.09"
        />
        <g id="Group_12" data-name="Group 12">
          <path
            id="Path_3"
            data-name="Path 3"
            className="cls-2"
            d="M97.56,87.55a97.12,97.12,0,0,1,44.58,10.79l-54.3,94.05h107A97.55,97.55,0,1,1,97.56,87.55Z"
            transform="translate(0.01 0)"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            className="cls-2"
            d="M142.14,98.34,198.92,0,310,192.39H194.83c.18-2.41.3-4.83.3-7.28A97.53,97.53,0,0,0,142.14,98.34Z"
            transform="translate(0.01 0)"
          />
        </g>
      </g>
    </Svg>
  );
}
