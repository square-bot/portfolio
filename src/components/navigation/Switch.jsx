import React, {useState} from 'react';


import styled from 'styled-components';
import {motion} from 'framer-motion';


import Moon from '../svg/Moon';
import Sun from '../svg/Sun';


const SwitchWrapper = styled.div`
    width: 40px;
    height: 22px;
    background-color: ${props => props.theme.logo};
    display: flex;
    justify-content: ${props => props.isOnSwitch ? 'flex-end' : 'flex-start'};
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    padding: 0 4px 0 4px;
    position: relative;
    border: 1px solid white;
    overflow: hidden;
`
const Handle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
`

export default function Switch({click}) {

    const[isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        click()
    }
    return(
        <>
        <SwitchWrapper
        isOnSwitch={isOn}
        onClick={toggleSwitch}>
            <Moon/>
            <Sun/>
            <Handle as={motion.div} layout transition={spring}/>
        </SwitchWrapper>
        </>
    )
}

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 20
}
