import React from "react";

import styled from "styled-components";

const InfoSvg = styled.svg`
  max-width: 300px;
  @media (min-width: 1440px) {
    max-width: 400px;
  }
  .cls-1 {
    fill: ${(props) => props.theme.secondaryColor};
  }

  .cls-2,
  .cls-4,
  .cls-6,
  .cls-7 {
    fill: none;
  }

  .cls-2,
  .cls-4,
  .cls-5,
  .cls-6,
  .cls-7 {
    stroke: ${(props) => props.theme.font};
  }

  .cls-2 {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .cls-3,
  .cls-5 {
    fill: ${(props) => props.theme.font};
  }

  .cls-4,
  .cls-5,
  .cls-6,
  .cls-7 {
    stroke-miterlimit: 10;
  }

  .cls-4,
  .cls-5 {
    stroke-width: 0.8px;
  }

  .cls-6 {
    stroke-width: 0.57px;
  }

  .cls-7 {
    stroke-width: 0.78px;
  }
  #_robot .cls-3 {
    fill: ${(props) => props.theme.logo};
  }
  #_robot .cls-2 {
    stroke: ${(props) => props.theme.logo};
  }
`;

export default function InformationSvg() {
  return (
    <InfoSvg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 474.37 439.67"
    >
      <circle className="cls-1" cx="239.22" cy="219.83" r="219.83" />
      <g id="_robot" data-name="#robot">
        <path
          className="cls-1"
          d="M200.88,272.08h91.75a21.13,21.13,0,0,1,21.13,21.13v42.25a21.13,21.13,0,0,1-21.12,21.13H200.88a21.12,21.12,0,0,1-21.12-21.12V293.21A21.12,21.12,0,0,1,200.88,272.08Z"
        />
        <path
          className="cls-1"
          d="M271.2,461.68V410.81a9.63,9.63,0,0,1,9.62-9.63H395.58a9.63,9.63,0,0,1,9.62,9.63v50.87"
          transform="translate(-91.45 -44.6)"
        />
        <path
          className="cls-1"
          d="M284.45,461.68V417a7.72,7.72,0,0,1,7.72-7.72h92.06A7.72,7.72,0,0,1,392,417v44.7"
          transform="translate(-91.45 -44.6)"
        />
        <line
          className="cls-1"
          x1="167.92"
          y1="417.08"
          x2="167.92"
          y2="387.66"
        />
        <line
          className="cls-1"
          x1="325.87"
          y1="417.08"
          x2="325.87"
          y2="387.66"
        />
        <rect
          className="cls-2"
          x="175.75"
          y="276.08"
          width="134"
          height="84.5"
          rx="21.13"
          ry="21.13"
        />
        <path
          className="cls-3"
          d="M310.2,405.19V392.25a6.32,6.32,0,0,1,6.31-6.31h37.38a6.32,6.32,0,0,1,6.31,6.31v12.94"
          transform="translate(-91.45 -44.6)"
        />
        <path
          className="cls-3"
          d="M267.2,383.44H260a6,6,0,0,1-6-6V352.19a6,6,0,0,1,6-6h7.25"
          transform="translate(-91.45 -44.6)"
        />
        <path
          className="cls-3"
          d="M401.2,383.44h6.12a6,6,0,0,0,6-6V352.19a6,6,0,0,0-6-6H401.2"
          transform="translate(-91.45 -44.6)"
        />
        <path
          className="cls-2"
          d="M267.2,465.69V414.82a9.63,9.63,0,0,1,9.62-9.63H391.58a9.63,9.63,0,0,1,9.62,9.63v50.87"
          transform="translate(-91.45 -44.6)"
        />
        <path
          className="cls-2"
          d="M280.45,465.69V421a7.72,7.72,0,0,1,7.72-7.72h92.06A7.72,7.72,0,0,1,388,421v44.7"
          transform="translate(-91.45 -44.6)"
        />
        <path
          className="cls-3"
          d="M267.2,436.27H250.87V424.52a8.58,8.58,0,0,1,8.58-8.58h7.75"
          transform="translate(-91.45 -44.6)"
        />
        <path
          className="cls-3"
          d="M401.2,415.94h6.5a9.33,9.33,0,0,1,9.33,9.33v11H401.2"
          transform="translate(-91.45 -44.6)"
        />
        <line
          className="cls-2"
          x1="163.92"
          y1="421.08"
          x2="163.92"
          y2="391.66"
        />
        <line
          className="cls-2"
          x1="321.87"
          y1="421.08"
          x2="321.87"
          y2="391.66"
        />
        <rect
          className="cls-3"
          x="225.75"
          y="381.5"
          width="34.5"
          height="29.09"
        />
        <line
          className="cls-2"
          x1="195.5"
          y1="387.58"
          x2="220.25"
          y2="387.58"
        />
        <line
          className="cls-2"
          x1="195.5"
          y1="393.83"
          x2="220.25"
          y2="393.83"
        />
        <line
          className="cls-2"
          x1="195.5"
          y1="400.08"
          x2="220.25"
          y2="400.08"
        />
        <line
          className="cls-2"
          x1="265.75"
          y1="387.58"
          x2="290.5"
          y2="387.58"
        />
        <line
          className="cls-2"
          x1="265.75"
          y1="393.83"
          x2="290.5"
          y2="393.83"
        />
        <line
          className="cls-2"
          x1="265.75"
          y1="400.08"
          x2="290.5"
          y2="400.08"
        />
        <line className="cls-2" x1="162.5" y1="318.33" x2="162.5" y2="228.83" />
        <line
          className="cls-2"
          x1="321.87"
          y1="318.33"
          x2="321.87"
          y2="228.83"
        />
        <circle className="cls-3" cx="207.88" cy="305.79" r="14.63" />
        <circle className="cls-3" cx="278.13" cy="305.79" r="14.63" />
      </g>
      <g id="_info" data-name="#info">
        <g>
          <path
            className="cls-1"
            d="M520.32,170h38.75a6.75,6.75,0,0,0,6.75-6.75v-54.1a6.75,6.75,0,0,0-6.75-6.75h-111a6.75,6.75,0,0,0-6.75,6.75v54.1a6.75,6.75,0,0,0,6.75,6.75h38.75"
            transform="translate(-91.45 -44.6)"
          />
          <path
            className="cls-1"
            d="M520.32,170l-5,8.6-9.43,16.34a2.71,2.71,0,0,1-4.69,0l-9.43-16.34-5-8.6"
            transform="translate(-91.45 -44.6)"
          />
        </g>
        <g>
          <path
            className="cls-2"
            d="M516.32,174h38.75a6.75,6.75,0,0,0,6.75-6.75v-54.1a6.75,6.75,0,0,0-6.75-6.75h-111a6.75,6.75,0,0,0-6.75,6.75v54.1a6.75,6.75,0,0,0,6.75,6.75h38.75"
            transform="translate(-91.45 -44.6)"
          />
          <path
            className="cls-2"
            d="M516.32,174l-5,8.6-9.43,16.34a2.71,2.71,0,0,1-4.69,0l-9.43-16.34-5-8.6"
            transform="translate(-91.45 -44.6)"
          />
        </g>
        <rect
          className="cls-3"
          x="353.89"
          y="69.48"
          width="36"
          height="6.17"
          rx="2.04"
          ry="2.04"
        />
        <rect
          className="cls-3"
          x="353.89"
          y="81.81"
          width="105.17"
          height="6.17"
          rx="3.08"
          ry="3.08"
        />
        <rect
          className="cls-3"
          x="353.89"
          y="94.15"
          width="49.83"
          height="6.17"
          rx="2.12"
          ry="2.12"
        />
        <rect
          className="cls-3"
          x="409.22"
          y="94.15"
          width="49.83"
          height="6.17"
          rx="2.12"
          ry="2.12"
        />
        <rect
          className="cls-3"
          x="353.89"
          y="106.48"
          width="105.17"
          height="6.17"
          rx="3.08"
          ry="3.08"
        />
        <rect
          className="cls-3"
          x="353.89"
          y="118.81"
          width="49.83"
          height="6.17"
          rx="2.12"
          ry="2.12"
        />
        <rect
          className="cls-3"
          x="409.22"
          y="118.81"
          width="49.83"
          height="6.17"
          rx="2.12"
          ry="2.12"
        />
        <rect
          className="cls-3"
          x="395.55"
          y="69.48"
          width="36"
          height="6.17"
          rx="2.04"
          ry="2.04"
        />
      </g>
      <g id="_data" data-name="#data">
        <circle className="cls-1" cx="76.39" cy="104.46" r="32.3" />
        <circle className="cls-1" cx="77.19" cy="40.41" r="8.18" />
        <circle className="cls-1" cx="135.2" cy="74.99" r="8.18" />
        <circle className="cls-1" cx="135.2" cy="138.6" r="8.18" />
        <circle className="cls-1" cx="18.36" cy="74.99" r="8.18" />
        <circle className="cls-1" cx="18.36" cy="138.6" r="8.18" />
        <g>
          <circle className="cls-4" cx="74.39" cy="106.46" r="32.3" />
          <circle className="cls-4" cx="75.19" cy="42.41" r="8.18" />
          <circle className="cls-3" cx="110.6" cy="50.59" r="8.18" />
          <circle className="cls-4" cx="133.2" cy="76.99" r="8.18" />
          <circle className="cls-3" cx="141.38" cy="108.8" r="8.18" />
          <circle className="cls-4" cx="133.2" cy="140.6" r="8.18" />
          <circle className="cls-3" cx="38.96" cy="50.59" r="8.18" />
          <circle className="cls-4" cx="16.36" cy="76.99" r="8.18" />
          <circle className="cls-3" cx="8.18" cy="108.8" r="8.18" />
          <circle className="cls-4" cx="16.36" cy="140.6" r="8.18" />
          <line
            className="cls-4"
            x1="23.58"
            y1="136.77"
            x2="47.75"
            y2="124.4"
          />
          <line className="cls-4" x1="16.36" y1="108.8" x2="42.28" y2="108.7" />
          <line className="cls-4" x1="23.73" y1="80.52" x2="45.29" y2="92.44" />
          <line className="cls-4" x1="44.06" y1="56.98" x2="56.11" y2="80.4" />
          <line className="cls-4" x1="75.19" y1="50.59" x2="75.19" y2="74.16" />
          <line
            className="cls-4"
            x1="106.14"
            y1="57.44"
            x2="92.83"
            y2="79.41"
          />
          <line
            className="cls-4"
            x1="126.63"
            y1="81.86"
            x2="103.76"
            y2="92.46"
          />
          <line
            className="cls-5"
            x1="133.2"
            y1="108.8"
            x2="106.69"
            y2="108.8"
          />
          <line
            className="cls-4"
            x1="125.64"
            y1="137.47"
            x2="102.02"
            y2="123.59"
          />
          <rect
            className="cls-3"
            x="154.44"
            y="145.41"
            width="18.6"
            height="2.8"
            transform="translate(219.1 -61.54) rotate(90)"
          />
          <rect
            className="cls-3"
            x="144.77"
            y="142.93"
            width="23.55"
            height="2.8"
            transform="translate(209.43 -56.82) rotate(90)"
          />
          <rect
            className="cls-3"
            x="142.12"
            y="147.48"
            width="14.45"
            height="2.8"
            transform="translate(206.78 -45.06) rotate(90)"
          />
          <rect
            className="cls-3"
            x="178.68"
            y="148.04"
            width="13.33"
            height="2.8"
            transform="translate(243.34 -80.51) rotate(90)"
          />
          <rect
            className="cls-3"
            x="163.7"
            y="140.25"
            width="28.9"
            height="2.8"
            transform="translate(228.36 -81.09) rotate(90)"
          />
          <rect
            className="cls-3"
            x="164.65"
            y="148.41"
            width="12.6"
            height="2.8"
            transform="translate(229.31 -65.74) rotate(90)"
          />
          <line className="cls-6" x1="49.3" y1="111.5" x2="97.89" y2="111.5" />
        </g>
      </g>
      <g id="_line4" data-name="#line4">
        <line className="cls-2" x1="315.81" y1="99.73" x2="183.55" y2="99.73" />
        <polyline
          className="cls-2"
          points="304.01 90.13 316.51 99.73 304.01 109"
        />
        <polyline className="cls-2" points="195.5 90.13 183 99.73 195.5 109" />
      </g>
      <g id="_line3" data-name="#line3">
        <path
          className="cls-2"
          d="M277.17,244.61l-82.79-.12a27.79,27.79,0,0,1-27.75-27.79V205.27"
          transform="translate(-91.45 -44.6)"
        />
        <polyline
          className="cls-2"
          points="173.92 190.41 186.42 200.01 173.92 209.28"
        />
      </g>
      <g id="_line2" data-name="#line2">
        <path
          className="cls-2"
          d="M390.36,244.61l82.79-.12a27.79,27.79,0,0,0,27.75-27.79V205.27"
          transform="translate(-91.45 -44.6)"
        />
        <polyline
          className="cls-2"
          points="310.72 190.41 298.22 200.01 310.72 209.28"
        />
      </g>
      <g id="_line1" data-name="#line1">
        <line
          className="cls-2"
          x1="248.87"
          y1="263.36"
          x2="248.87"
          y2="231.11"
        />
        <polyline
          className="cls-2"
          points="258.47 251.56 248.87 264.06 239.59 251.56"
        />
      </g>
      <g id="_folder" data-name="#folder">
        <path
          className="cls-1"
          d="M379.08,262.26H299.82a3.75,3.75,0,0,1-3.75-3.75V207.78a3.75,3.75,0,0,1,3.75-3.75h10.79a3.75,3.75,0,0,1,2.59,1l6,5.72a3.75,3.75,0,0,0,2.59,1h57.29a3.75,3.75,0,0,1,3.75,3.75v42.93A3.75,3.75,0,0,1,379.08,262.26Z"
          transform="translate(-91.45 -44.6)"
        />
        <rect
          className="cls-3"
          x="217.4"
          y="187.33"
          width="54.47"
          height="4.81"
          rx="1.96"
          ry="1.96"
        />
        <rect
          className="cls-3"
          x="217.4"
          y="195.9"
          width="54.47"
          height="4.81"
          rx="1.96"
          ry="1.96"
        />
        <path
          className="cls-7"
          d="M374.08,266.26H294.82a3.75,3.75,0,0,1-3.75-3.75V211.78a3.75,3.75,0,0,1,3.75-3.75h10.79a3.75,3.75,0,0,1,2.59,1l6,5.72a3.75,3.75,0,0,0,2.59,1h57.29a3.75,3.75,0,0,1,3.75,3.75v42.93A3.75,3.75,0,0,1,374.08,266.26Z"
          transform="translate(-91.45 -44.6)"
        />
        <rect
          className="cls-3"
          x="201.52"
          y="165.8"
          width="14.14"
          height="4.81"
          rx="1"
          ry="1"
        />
      </g>
    </InfoSvg>
  );
}
