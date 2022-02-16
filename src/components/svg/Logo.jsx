import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';



const LogoWrapper = styled(Link)`
    svg{
        height: 30px;
        .cls-1 {
        fill: ${props => props.theme.secondaryColor};
        }
    }

`

export default function Logo(props) {
    return (
        <LogoWrapper to="/">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.64 85.64">
                <g>
                <rect width="85.64" height="85.64"/>
                <rect className="cls-1" x="2.85" y="2.85" width="79.95" height="79.95"/>
                <path d="M70,22.13V42.79H64.57V32H21.07V42.79H15.65V22.13H10.24v31.5H21.07V64.46h43.5V53.63H75.4V22.13ZM26.65,51.88V41H37.49V51.88Zm22,9.17H36.94V56.21H48.69ZM59,51.88H48.15V41H59Z"/>
                </g>
            </svg>
        </LogoWrapper>
    )
}
