import React from "react";
import styled from "styled-components";

const Tablet = styled.svg`
  /* width: 70%; */
  max-width: 300px;
  @media (min-width: 1440px) {
    max-width: 400px;
  }
  .cls-1 {
    fill: ${(props) => props.theme.secondaryColor};
  }

  .cls-2,
  .cls-3,
  .cls-5,
  .cls-6,
  .cls-7,
  .cls-8 {
    fill: none;
  }

  .cls-2,
  .cls-3,
  .cls-5,
  .cls-6,
  .cls-8 {
    stroke: ${(props) => props.theme.font};
  }

  .cls-2,
  .cls-3,
  .cls-5,
  .cls-6 {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .cls-2 {
    stroke-width: 0.94px;
  }

  .cls-4 {
    fill: ${(props) => props.theme.font};
  }

  .cls-5 {
    stroke-width: 0.83px;
  }

  .cls-6 {
    stroke-width: 0.86px;
  }

  .cls-7 {
    stroke: ${(props) => props.theme.font};
  }

  .cls-7,
  .cls-8 {
    stroke-miterlimit: 10;
  }
`;

export default function DesignSvg() {
  return (
    <Tablet xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385.96 342.85">
      <defs>
        <style></style>
      </defs>
      <title>designsection</title>
      <g id="Layer_2" data-name="Layer 2">
        <polygon
          className="cls-1"
          points="344.44 144.09 347.1 149.25 349.76 154.4 344.44 154.4 339.11 154.4 341.77 149.25 344.44 144.09"
        />
        <rect
          className="cls-1"
          x="95.36"
          y="103.44"
          width="222.96"
          height="162.16"
          rx="11.5"
          ry="11.5"
        />
        <rect
          className="cls-1"
          x="341.15"
          y="52.67"
          width="5.55"
          height="5.21"
        />
        <rect
          className="cls-1"
          x="350.17"
          y="165.39"
          width="2.53"
          height="11.67"
        />
      </g>
      <g id="Layer_1" data-name="Layer 1">
        <rect
          className="cls-2"
          x="91.36"
          y="106.44"
          width="222.96"
          height="162.16"
          rx="11.5"
          ry="11.5"
        />
        <line
          className="cls-3"
          x1="93.57"
          y1="130.88"
          x2="311.32"
          y2="130.88"
        />
        <rect
          className="cls-3"
          x="318.85"
          y="133.65"
          width="22.5"
          height="11.25"
          rx="5.62"
          ry="5.62"
          transform="translate(-25.86 -213.14) rotate(45)"
        />
        <line
          className="cls-3"
          x1="112.14"
          y1="115.95"
          x2="106.32"
          y2="122.13"
        />
        <rect
          className="cls-3"
          x="506.87"
          y="133.65"
          width="22.5"
          height="11.25"
          rx="5.62"
          ry="5.62"
          transform="translate(761.94 -149.13) rotate(135)"
        />
        <line
          className="cls-3"
          x1="294.03"
          y1="115.95"
          x2="299.84"
          y2="122.13"
        />
        <path
          className="cls-3"
          d="M330.85,127V113.78a3,3,0,0,1,3-3H561.22a3,3,0,0,0,3-3V96.57"
          transform="translate(-221.03 -20.52)"
        />
        <polyline
          className="cls-4"
          points="345.7 58.88 348.07 58.88 348.07 76.05 337.57 76.05 337.57 58.88 340.15 58.88"
        />
        <rect
          className="cls-2"
          x="340.15"
          y="53.67"
          width="5.55"
          height="5.21"
        />
        <path
          className="cls-4"
          d="M570.2,198.58v64.27a2.08,2.08,0,0,1-2.08,2.08h-7.3a2.08,2.08,0,0,1-2.08-2.08V175.92H570.2v11"
          transform="translate(-221.03 -20.52)"
        />
        <polygon
          className="cls-5"
          points="343.44 145.09 346.1 150.25 348.76 155.4 343.44 155.4 338.11 155.4 340.77 150.25 343.44 145.09"
        />
        <rect
          className="cls-6"
          x="349.17"
          y="166.39"
          width="2.53"
          height="11.67"
        />
        <path
          className="cls-4"
          d="M325.6,131.7h1.52a2.7,2.7,0,0,1,2.7,2.7v5a0,0,0,0,1,0,0h-6.92a0,0,0,0,1,0,0v-5A2.7,2.7,0,0,1,325.6,131.7Z"
          transform="translate(-216.91 260.09) rotate(-46.79)"
        />
        <path
          className="cls-4"
          d="M333.77,139.41h1.52a2.7,2.7,0,0,1,2.7,2.7v5a0,0,0,0,1,0,0h-6.92a0,0,0,0,1,0,0v-5a2.7,2.7,0,0,1,2.7-2.7Z"
          transform="translate(451.33 -12.54) rotate(135)"
        />
        <path
          className="cls-4"
          d="M518.08,131.7H525a0,0,0,0,1,0,0v5a2.7,2.7,0,0,1-2.7,2.7h-1.52a2.7,2.7,0,0,1-2.7-2.7v-5a0,0,0,0,1,0,0Z"
          transform="translate(558.81 587.94) rotate(-133.21)"
        />
        <path
          className="cls-4"
          d="M509.92,139.41h6.92a0,0,0,0,1,0,0v5a2.7,2.7,0,0,1-2.7,2.7h-1.52a2.7,2.7,0,0,1-2.7-2.7v-5a0,0,0,0,1,0,0Z"
          transform="translate(30.62 -341.58) rotate(45)"
        />
        <g id="_dimension" data-name="#dimension">
          <g id="Surfaces">
            <g id="UI_UX_Surface" data-name="UI UX Surface">
              <g id="Outline_no_shadow" data-name="Outline no shadow">
                <path
                  className="cls-1"
                  d="M275.21,47.85h27.92a7.65,7.65,0,0,1,7.65,7.65V82.34A7.65,7.65,0,0,1,303.12,90H275.21a7.65,7.65,0,0,1-7.65-7.65V55.51A7.65,7.65,0,0,1,275.21,47.85Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g id="Surfaces-2" data-name="Surfaces">
            <g id="_3D_Surface" data-name=" 3D Surface">
              <g id="Outline_no_shadow-2" data-name="Outline no shadow">
                <path
                  className="cls-7"
                  d="M272.49,49.74H300.7a7.73,7.73,0,0,1,7.73,7.73V84.59a7.73,7.73,0,0,1-7.73,7.73H272.49a7.73,7.73,0,0,1-7.73-7.73V57.47A7.73,7.73,0,0,1,272.49,49.74Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g id="Outlined_Mnemonics_Logos" data-name="Outlined Mnemonics Logos">
            <g id="Dn">
              <path
                className="cls-4"
                d="M271.12,79.55V60.91a.22.22,0,0,1,.2-.24h0c.29,0,.73,0,1.29,0l2,0c.76,0,1.57,0,2.44,0a12.51,12.51,0,0,1,5.82,1.2,8.2,8.2,0,0,1,3.48,3.29,9.9,9.9,0,0,1,1.16,4.82,10.83,10.83,0,0,1-.6,3.73,8.87,8.87,0,0,1-1.64,2.8,9.8,9.8,0,0,1-2.37,1.95,10.33,10.33,0,0,1-2.82,1.15,12.49,12.49,0,0,1-3,.36h-2.18c-.76,0-1.49,0-2.15,0s-1.16,0-1.49,0C271.18,79.84,271.12,79.73,271.12,79.55Zm4-15.36V76.32a5.66,5.66,0,0,1,.58,0l.55,0c.18,0,.4,0,.64,0a7.43,7.43,0,0,0,2.6-.42,5.21,5.21,0,0,0,2-1.24,5.49,5.49,0,0,0,1.29-2,7.75,7.75,0,0,0,.45-2.73,6.86,6.86,0,0,0-.44-2.57,4.65,4.65,0,0,0-1.27-1.84,5.07,5.07,0,0,0-2-1.09,8.49,8.49,0,0,0-2.53-.35c-.38,0-.71,0-1,0a7.81,7.81,0,0,0-.91,0Z"
                transform="translate(-221.03 -20.52)"
              />
              <path
                className="cls-4"
                d="M289.29,79.56V68.66c0-.33,0-.71,0-1.11s0-.8,0-1.16,0-.66-.05-.87a.17.17,0,0,1,0-.18.31.31,0,0,1,.18-.05h3a.75.75,0,0,1,.29.05.28.28,0,0,1,.15.2c0,.11.09.25.13.4a2.9,2.9,0,0,1,.11.55A6,6,0,0,1,295,65.35a7,7,0,0,1,2.2-.36,5.43,5.43,0,0,1,1.71.27A4.38,4.38,0,0,1,301.7,68a8.18,8.18,0,0,1,.44,2.91v8.7c0,.18-.07.25-.24.25h-3.55a.25.25,0,0,1-.29-.22V71.21a3.79,3.79,0,0,0-.25-1.49,2,2,0,0,0-2-1.24,3.59,3.59,0,0,0-1.38.25,3.83,3.83,0,0,0-1.09.69V79.56c0,.18-.07.25-.24.25h-3.57a.23.23,0,0,1-.25-.2Z"
                transform="translate(-221.03 -20.52)"
              />
            </g>
          </g>
        </g>
        <g id="_illustartor" data-name="#illustartor">
          <g id="Surfaces-3" data-name="Surfaces">
            <g id="UI_UX_Surface-2" data-name="UI UX Surface">
              <g id="Outline_no_shadow-3" data-name="Outline no shadow">
                <path
                  className="cls-1"
                  d="M571.42,312h27.92a7.65,7.65,0,0,1,7.65,7.65V346.5a7.65,7.65,0,0,1-7.65,7.65H571.42a7.65,7.65,0,0,1-7.65-7.65V319.67A7.65,7.65,0,0,1,571.42,312Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g id="Surfaces-4" data-name="Surfaces">
            <g id="Drawing_Surface" data-name="Drawing Surface">
              <g id="Outline_no_shadow-4" data-name="Outline no shadow">
                <path
                  className="cls-8"
                  d="M568.84,313.52h27.92a7.65,7.65,0,0,1,7.65,7.65V348a7.65,7.65,0,0,1-7.65,7.65H568.84a7.65,7.65,0,0,1-7.65-7.65V321.17A7.65,7.65,0,0,1,568.84,313.52Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g
            id="Outlined_Mnemonics_Logos-2"
            data-name="Outlined Mnemonics Logos"
          >
            <g id="Ai">
              <path
                className="cls-4"
                d="M582.13,338.8h-6.7L574.06,343a.32.32,0,0,1-.34.25h-3.39c-.2,0-.25-.11-.2-.32l5.8-16.7c.05-.18.11-.38.18-.59a6.29,6.29,0,0,0,.11-1.17.18.18,0,0,1,.14-.2H581c.14,0,.22.05.23.14L587.84,343c.05.2,0,.29-.18.29H583.9a.27.27,0,0,1-.29-.2Zm-5.66-3.66h4.57c-.11-.38-.25-.83-.41-1.3s-.32-1-.49-1.55-.34-1.1-.52-1.66-.34-1.08-.49-1.6-.27-1-.4-1.4h0a22.11,22.11,0,0,1-.61,2.32c-.27.86-.54,1.77-.83,2.67s-.52,1.77-.79,2.52Z"
                transform="translate(-221.03 -20.52)"
              />
              <path
                className="cls-4"
                d="M591.77,327.38a2.23,2.23,0,0,1-1.6-.63,2.34,2.34,0,0,1-.61-1.66,2.12,2.12,0,0,1,.65-1.6,2.31,2.31,0,0,1,1.6-.63,2.16,2.16,0,0,1,1.64.63,2.48,2.48,0,0,1,0,3.26A2.12,2.12,0,0,1,591.77,327.38Zm-2,15.63V329.15c0-.18.07-.25.23-.25h3.57c.16,0,.23.09.23.25V343c0,.2-.07.29-.23.29H590A.25.25,0,0,1,589.75,343Z"
                transform="translate(-221.03 -20.52)"
              />
            </g>
          </g>
        </g>
        <g id="_photoshop" data-name="#photoshop">
          <g id="Surfaces-5" data-name="Surfaces">
            <g id="UI_UX_Surface-3" data-name="UI UX Surface">
              <g id="Outline_no_shadow-5" data-name="Outline no shadow">
                <path
                  className="cls-1"
                  d="M392,20.52h27.92a7.65,7.65,0,0,1,7.65,7.65V55a7.65,7.65,0,0,1-7.65,7.65H392A7.65,7.65,0,0,1,384.3,55V28.17A7.65,7.65,0,0,1,392,20.52Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g id="Surfaces-6" data-name="Surfaces">
            <g id="Photo_Surface" data-name="Photo Surface">
              <g id="Outline_no_shadow-6" data-name="Outline no shadow">
                <path
                  className="cls-8"
                  d="M388.3,22.84h27.92a7.65,7.65,0,0,1,7.65,7.65V57.33A7.65,7.65,0,0,1,416.22,65H388.3a7.65,7.65,0,0,1-7.65-7.65V30.5A7.65,7.65,0,0,1,388.3,22.84Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g
            id="Outlined_Mnemonics_Logos-3"
            data-name="Outlined Mnemonics Logos"
          >
            <g id="Ps">
              <path
                className="cls-4"
                d="M390.38,52.4V33.87c0-.13.05-.2.18-.2.31,0,.59,0,1,0l1.37,0,1.57,0c.56,0,1.1,0,1.64,0a10.59,10.59,0,0,1,3.71.56,6.43,6.43,0,0,1,2.41,1.48,5.73,5.73,0,0,1,1.31,2.05A6.89,6.89,0,0,1,404,40a6.44,6.44,0,0,1-1.08,3.84A6.17,6.17,0,0,1,400,46a11.67,11.67,0,0,1-4.05.61c-.43,0-.72,0-.9,0s-.43,0-.77,0v5.78a.22.22,0,0,1-.2.25h-3.49C390.45,52.63,390.38,52.56,390.38,52.4Zm3.93-15.25v6.05c.25,0,.49,0,.7,0h1a6.73,6.73,0,0,0,2.07-.32,3.1,3.1,0,0,0,1.48-1,2.78,2.78,0,0,0,.56-1.86,3,3,0,0,0-.41-1.6,2.61,2.61,0,0,0-1.26-1,5.28,5.28,0,0,0-2.13-.36c-.47,0-.88,0-1.22,0a4.12,4.12,0,0,0-.74,0Z"
                transform="translate(-221.03 -20.52)"
              />
              <path
                className="cls-4"
                d="M415.23,42.1a6.37,6.37,0,0,0-1.73-.61,9.49,9.49,0,0,0-2-.23,3.63,3.63,0,0,0-1.08.13.92.92,0,0,0-.56.36,1,1,0,0,0-.14.49.8.8,0,0,0,.18.47,2,2,0,0,0,.61.49c.41.22.85.41,1.28.59a13,13,0,0,1,2.77,1.31A4.19,4.19,0,0,1,416,46.58a3.89,3.89,0,0,1,.41,1.86,4.19,4.19,0,0,1-.7,2.4,4.51,4.51,0,0,1-2,1.6,8.25,8.25,0,0,1-3.26.58,12.41,12.41,0,0,1-2.45-.23,7.27,7.27,0,0,1-1.84-.58.35.35,0,0,1-.2-.34V48.72a.2.2,0,0,1,.07-.16.14.14,0,0,1,.16,0,7.71,7.71,0,0,0,2.23.88,8.38,8.38,0,0,0,2.13.27,3.44,3.44,0,0,0,1.49-.25.84.84,0,0,0,.49-.76,1,1,0,0,0-.43-.72,7.64,7.64,0,0,0-1.77-.85,11,11,0,0,1-2.56-1.3,4.66,4.66,0,0,1-1.37-1.53,3.86,3.86,0,0,1-.41-1.84,4.24,4.24,0,0,1,.61-2.18,4.44,4.44,0,0,1,1.89-1.66,7,7,0,0,1,3.19-.63,15.53,15.53,0,0,1,2.23.16,6.34,6.34,0,0,1,1.55.41.32.32,0,0,1,.18.16.9.9,0,0,1,0,.22v2.94a.22.22,0,0,1-.09.18A.48.48,0,0,1,415.23,42.1Z"
                transform="translate(-221.03 -20.52)"
              />
            </g>
          </g>
        </g>
        <g id="_xd" data-name="#xd">
          <g id="Surfaces-7" data-name="Surfaces">
            <g id="UI_UX_Surface-4" data-name="UI UX Surface">
              <g id="Outline_no_shadow-7" data-name="Outline no shadow">
                <path
                  className="cls-1"
                  d="M231.19,184.18H259.1a7.65,7.65,0,0,1,7.65,7.65v26.84a7.65,7.65,0,0,1-7.65,7.65H231.19a7.65,7.65,0,0,1-7.65-7.65V191.84A7.65,7.65,0,0,1,231.19,184.18Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g id="Surfaces-8" data-name="Surfaces">
            <g id="UI_UX_Surface-5" data-name="UI UX Surface">
              <g id="Outline_no_shadow-8" data-name="Outline no shadow">
                <path
                  className="cls-8"
                  d="M229.19,186.18H257.1a7.65,7.65,0,0,1,7.65,7.65v26.84a7.65,7.65,0,0,1-7.65,7.65H229.19a7.65,7.65,0,0,1-7.65-7.65V193.84A7.65,7.65,0,0,1,229.19,186.18Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g
            id="Outlined_Mnemonics_Logos-4"
            data-name="Outlined Mnemonics Logos"
          >
            <g id="Xd">
              <path
                className="cls-4"
                d="M244.26,197.26l-5.4,8.92,5.76,9.46a.31.31,0,0,1,0,.22c0,.07-.09,0-.2,0h-4.12c-.29,0-.49,0-.61-.2-.38-.76-.77-1.49-1.15-2.25s-.79-1.49-1.22-2.27-.86-1.55-1.3-2.34h0c-.38.77-.79,1.55-1.21,2.32s-.83,1.55-1.22,2.31-.83,1.53-1.24,2.27c-.07.18-.22.2-.41.2h-4c-.07,0-.13,0-.13-.05a.25.25,0,0,1,0-.2l5.6-9.19L228,197.24c-.05-.07-.07-.14,0-.18a.21.21,0,0,1,.18-.07h4.09a1.06,1.06,0,0,1,.25,0,.51.51,0,0,1,.18.16c.34.77.74,1.55,1.15,2.32s.85,1.53,1.3,2.29.83,1.51,1.21,2.29h0c.38-.79.77-1.57,1.17-2.32s.81-1.51,1.22-2.27.81-1.53,1.21-2.27a.31.31,0,0,1,.11-.18.34.34,0,0,1,.23,0h3.8a.17.17,0,0,1,.2.13s0,.09-.05.13Z"
                transform="translate(-221.03 -20.52)"
              />
              <path
                className="cls-4"
                d="M252.58,216.26a9,9,0,0,1-3.87-.81A6.28,6.28,0,0,1,246,213a7.79,7.79,0,0,1-1-4.11,7.4,7.4,0,0,1,1-3.8,7.48,7.48,0,0,1,2.86-2.79,9.21,9.21,0,0,1,4.56-1,3.22,3.22,0,0,1,.38,0l.56,0v-5.69c0-.13.05-.2.18-.2h3.66a.16.16,0,0,1,.18.13v17.18c0,.32,0,.68,0,1.08s.05.74.07,1a.29.29,0,0,1-.18.29,13.75,13.75,0,0,1-2.94.86A15.89,15.89,0,0,1,252.58,216.26Zm1.77-3.6v-7.92a4.61,4.61,0,0,0-.49-.09c-.2,0-.4,0-.59,0a4.44,4.44,0,0,0-2,.47,4,4,0,0,0-1.53,1.33,4,4,0,0,0-.59,2.29,5,5,0,0,0,.31,1.86,3.52,3.52,0,0,0,.81,1.28,3.11,3.11,0,0,0,1.22.72,4.71,4.71,0,0,0,1.49.23c.27,0,.52,0,.76,0A1.58,1.58,0,0,0,254.35,212.66Z"
                transform="translate(-221.03 -20.52)"
              />
            </g>
          </g>
        </g>
        <g id="_ae" data-name="#ae">
          <g id="Surfaces-9" data-name="Surfaces">
            <g id="UI_UX_Surface-6" data-name="UI UX Surface">
              <g id="Outline_no_shadow-9" data-name="Outline no shadow">
                <path
                  className="cls-1"
                  d="M315.91,318.09h27.92a7.65,7.65,0,0,1,7.65,7.65v26.84a7.65,7.65,0,0,1-7.65,7.65H315.91a7.65,7.65,0,0,1-7.65-7.65V325.75A7.65,7.65,0,0,1,315.91,318.09Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g id="Surfaces-10" data-name="Surfaces">
            <g id="Video_Audio_Surface" data-name="Video Audio Surface">
              <g id="Outline_no_shadow-10" data-name="Outline no shadow">
                <path
                  className="cls-8"
                  d="M313.26,320h28.42a7.79,7.79,0,0,1,7.79,7.79v27.32a7.79,7.79,0,0,1-7.79,7.79H313.26a7.79,7.79,0,0,1-7.79-7.79V327.75A7.79,7.79,0,0,1,313.26,320Z"
                  transform="translate(-221.03 -20.52)"
                />
              </g>
            </g>
          </g>
          <g
            id="Outlined_Mnemonics_Logos-5"
            data-name="Outlined Mnemonics Logos"
          >
            <g id="Ae">
              <path
                className="cls-4"
                d="M323.14,345.63h-6.82L314.93,350a.32.32,0,0,1-.35.26h-3.45c-.2,0-.26-.11-.2-.33l5.9-16.93c.06-.18.11-.35.18-.57a6.41,6.41,0,0,0,.11-1.19.18.18,0,0,1,.15-.2H322c.13,0,.22.06.24.15l6.69,18.8c.06.2,0,.29-.18.29h-3.83a.28.28,0,0,1-.29-.2ZM317.38,342H322c-.11-.39-.26-.84-.42-1.32s-.33-1-.5-1.58-.35-1.12-.53-1.69-.35-1.1-.5-1.63-.28-1-.4-1.43h0a22.52,22.52,0,0,1-.62,2.37c-.28.88-.55,1.8-.84,2.71S317.66,341.21,317.38,342Z"
                transform="translate(-221.03 -20.52)"
              />
              <path
                className="cls-4"
                d="M339.83,343.94H334a4,4,0,0,0,.57,1.63,2.91,2.91,0,0,0,1.34,1.1,5.7,5.7,0,0,0,2.35.46,11,11,0,0,0,1.91-.2,6.89,6.89,0,0,0,1.63-.42c.09-.07.15,0,.15.15v2.81a.92.92,0,0,1,0,.22.43.43,0,0,1-.13.13,7.85,7.85,0,0,1-1.83.55,12.39,12.39,0,0,1-2.6.22,8.69,8.69,0,0,1-3.52-.64,6.17,6.17,0,0,1-2.31-1.74,6.73,6.73,0,0,1-1.27-2.4,9.5,9.5,0,0,1,.07-5.59,7.48,7.48,0,0,1,1.38-2.51,6.65,6.65,0,0,1,2.22-1.74,6.93,6.93,0,0,1,3.06-.57,6.62,6.62,0,0,1,2.84.57,5.05,5.05,0,0,1,1.93,1.47,6.71,6.71,0,0,1,1.1,2.09,7.21,7.21,0,0,1,.35,2.24c0,.44,0,.83,0,1.17s-.06.61-.07.77a.27.27,0,0,1-.26.24l-.61,0a8.68,8.68,0,0,1-1.06.06C340.75,344,340.31,343.94,339.83,343.94ZM334,341.26h3.87c.48,0,.83,0,1,0a.9.9,0,0,0,.42-.15v-.18a2.1,2.1,0,0,0-.11-.68,2.43,2.43,0,0,0-2.38-1.69,2.58,2.58,0,0,0-2.44,1.39A3.8,3.8,0,0,0,334,341.26Z"
                transform="translate(-221.03 -20.52)"
              />
            </g>
          </g>
        </g>
      </g>
    </Tablet>
  );
}
