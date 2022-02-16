import React from 'react';

import styled from 'styled-components';


const ArrowRight = styled.svg`
   height: 10px;
   .cls-1 {
        fill: ${props => props.theme.font};
   }
`

export default function Arrow() {
    return (
        <ArrowRight id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.58 10.24">

        <title>right-arrow</title>
        <path id="right-arrow" className="cls-1" d="M9.82.15a.52.52,0,0,0-.73.73l3.72,3.72H.51A.51.51,0,0,0,0,5.12H0a.52.52,0,0,0,.51.52H12.81L9.08,9.36a.53.53,0,0,0,0,.73.51.51,0,0,0,.73,0h0l4.61-4.61a.51.51,0,0,0,0-.72h0Z" transform="translate(0 -0.01)"/>
        </ArrowRight>
    )
}
