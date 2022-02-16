import React from 'react'

import styled from 'styled-components';
import useResponsive from '../useResponsive'

import Switch from './Switch';
import Logo from '../svg/Logo';
import Burger from './Burger';
import NavMobile from './NavMobile';
import Nav from './Nav';

const HeaderMain = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.body};
  z-index: 10;

`
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  height: 60px;
  margin: 0 auto;
  padding: 0 20px;
`



export default function Navigation({click, open, setOpen}) {

  const {windowWidth} = useResponsive();

  const navigat =
  windowWidth > 1023 ?
  <Nav/> :
  <NavMobile open={open} setOpen={setOpen}/>

    return (
        <HeaderMain>
          <NavWrapper>
            <Logo/>
            <Switch click={click}/>
            {navigat}
            <Burger
            open={open}
            setOpen={setOpen}
            />
          </NavWrapper>
        </HeaderMain>
    )
}
