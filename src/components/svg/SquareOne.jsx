import React from "react";

import styled from "styled-components";

const Square = styled.div`
  width: 40px;
  position: fixed;
  top: 100px;
  left: -5%;
  fill: ${(props) => props.theme.links};
  filter: drop-shadow(6px -6px 0 ${(props) => props.theme.secondaryColor});
  @media (min-width: 425px) {
    left: 10%;
  }
`;

export default function SquareOne() {
  return (
    <Square>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
        <title>square_one</title>
        <g id="square_one" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M0,0V27H27V0ZM20.83,20.83H6.17V6.17H20.83Z" />
          </g>
        </g>
      </svg>
    </Square>
  );
}
