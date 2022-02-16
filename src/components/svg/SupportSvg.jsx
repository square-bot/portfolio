import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  max-width: 250px;
  @media (min-width: 1440px) {
    max-width: 350px;
  }
  .cls-1 {
    fill: ${(props) => props.theme.secondaryColor};
  }

  .cls-2 {
    fill: ${(props) => props.theme.logo};
  }

  .cls-3 {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 0.92px;
  }
  #_monitor {
    fill: ${(props) => props.theme.font};
  }
`;

export default function SupportSvg() {
  return (
    <Svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 222.39 222.39"
    >
      <title>Untitled-1</title>
      <circle className="cls-1" cx="111.19" cy="111.19" r="111.19" />
      <g id="_monitor" data-name="#monitor">
        <rect
          x="4.89"
          y="79.97"
          width="210"
          height="108.46"
          rx="6.2"
          ry="6.2"
        />
        <rect
          x="74.51"
          y="204.26"
          width="65.75"
          height="3.37"
          rx="1.21"
          ry="1.21"
        />
        <path
          d="M430.95,356.32a4,4,0,0,1-2.26-3L427,342.21H388l-2.33,11.32a4,4,0,0,1-2,2.66L380.5,358h54Zm-5.43-12.48H389.23a.55.55,0,1,1,0-1.09h36.28a.55.55,0,0,1,0,1.09Z"
          transform="translate(-300.11 -153.78)"
        />
      </g>
      <rect
        id="_screenFour"
        data-name="#screenFour"
        className="cls-1"
        x="10.89"
        y="84.58"
        width="198"
        height="99.24"
      />
      <g>
        <rect
          id="_screenFour-2"
          data-name="#screenFour"
          className="cls-2"
          x="18.89"
          y="55.6"
          width="182"
          height="91.22"
        />
        <rect
          className="cls-1"
          x="24.83"
          y="58.66"
          width="124.77"
          height="3.2"
        />
        <rect
          className="cls-1"
          x="178.87"
          y="58.59"
          width="3.39"
          height="3.2"
        />
        <rect
          className="cls-1"
          x="189.96"
          y="58.59"
          width="3.39"
          height="3.2"
        />
        <rect
          className="cls-1"
          x="184.41"
          y="58.59"
          width="3.39"
          height="3.2"
        />
        <line className="cls-3" x1="18.89" y1="65.59" x2="200.89" y2="65.59" />
        <path
          id="wheelfive"
          className="cls-1"
          d="M412.11,260.6c0-.29,0-.58,0-.87l8.55-3.56a34,34,0,0,0-2.88-10.1l-9.13,1.49a24.61,24.61,0,0,0-2-3l4.82-7.89a33.72,33.72,0,0,0-8.3-6.5l-6.48,6.56a24,24,0,0,0-3.42-1.24l-.72-9.23a35.55,35.55,0,0,0-6.52-.6,36.71,36.71,0,0,0-4,.23L380.58,235a20.44,20.44,0,0,0-3.5,1l-6-7a34.27,34.27,0,0,0-8.74,5.88l4.24,8.22a25,25,0,0,0-2.24,2.84l-9-2.15a34.43,34.43,0,0,0-3.62,9.88l8.3,4.18a20.28,20.28,0,0,0-.17,2.75c0,.29,0,.56,0,.85L351.33,265a34.11,34.11,0,0,0,2.88,10.12l9.15-1.49a24.46,24.46,0,0,0,2,3l-4.82,7.89a34.62,34.62,0,0,0,8.28,6.5l6.5-6.58a24,24,0,0,0,3.42,1.24l.72,9.23a35.54,35.54,0,0,0,6.52.6,36.71,36.71,0,0,0,4-.23l1.39-9.15a21.59,21.59,0,0,0,3.48-1l6,7a34.81,34.81,0,0,0,8.74-5.88l-4.24-8.24a22.43,22.43,0,0,0,2.24-2.84l9,2.15a34.43,34.43,0,0,0,3.62-9.88L412,263.33A23.67,23.67,0,0,0,412.11,260.6ZM386,278.84a18.24,18.24,0,1,1,18.24-18.24A18.24,18.24,0,0,1,386,278.84Z"
          transform="translate(-300.11 -153.78)"
        />
        <path
          id="wheelfour"
          className="cls-1"
          d="M462.76,271.32c0-.2,0-.4,0-.6l5.93-2.47a23.54,23.54,0,0,0-2-7l-6.33,1a17.06,17.06,0,0,0-1.41-2.08l3.34-5.47a23.37,23.37,0,0,0-5.75-4.51L452,254.78a16.61,16.61,0,0,0-2.37-.86l-.5-6.4a24.64,24.64,0,0,0-4.52-.42,25.44,25.44,0,0,0-2.78.16l-1,6.34a14.16,14.16,0,0,0-2.42.69l-4.16-4.86a23.75,23.75,0,0,0-6.05,4.07l2.94,5.7a17.3,17.3,0,0,0-1.55,2l-6.24-1.49a23.86,23.86,0,0,0-2.51,6.84l5.75,2.9a14.05,14.05,0,0,0-.11,1.91c0,.2,0,.39,0,.59l-5.93,2.47a23.64,23.64,0,0,0,2,7l6.34-1a17,17,0,0,0,1.39,2.08L427,287.91a24,24,0,0,0,5.74,4.51l4.5-4.56a16.61,16.61,0,0,0,2.37.86l.5,6.4a24.63,24.63,0,0,0,4.52.42,25.44,25.44,0,0,0,2.78-.16l1-6.34a15,15,0,0,0,2.41-.67l4.18,4.86a24.12,24.12,0,0,0,6.05-4.07l-2.94-5.71a15.54,15.54,0,0,0,1.55-2l6.24,1.49a23.86,23.86,0,0,0,2.51-6.84l-5.74-2.9A16.4,16.4,0,0,0,462.76,271.32ZM444.66,284a12.64,12.64,0,1,1,12.64-12.64A12.64,12.64,0,0,1,444.66,284Z"
          transform="translate(-300.11 -153.78)"
        />
      </g>
      <rect
        className="cls-2"
        x="30.14"
        y="174.22"
        width="27.22"
        height="3.49"
      />
      <rect
        className="cls-2"
        x="62.26"
        y="174.22"
        width="50.09"
        height="3.49"
      />
      <rect
        className="cls-2"
        x="116.89"
        y="159.02"
        width="27.22"
        height="3.49"
      />
      <rect
        className="cls-2"
        x="62.64"
        y="159.02"
        width="50.09"
        height="3.49"
      />
      <rect
        className="cls-2"
        x="102.64"
        y="165.96"
        width="27.22"
        height="3.49"
      />
      <rect
        className="cls-2"
        x="62.64"
        y="165.96"
        width="35.22"
        height="3.49"
      />
      <rect
        className="cls-2"
        x="30.14"
        y="151.62"
        width="68.79"
        height="3.49"
      />
      <rect
        className="cls-2"
        x="111.19"
        y="151.62"
        width="68.79"
        height="3.49"
      />
    </Svg>
  );
}