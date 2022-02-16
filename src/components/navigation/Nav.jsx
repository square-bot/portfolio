import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavItems = styled.nav`
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  list-style: none;

  li {
    margin: 0 40px;
    &:nth-last-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      height: 30px;
      background-color: ${(props) => props.theme.secondaryColor};
      border: 1px solid black;
      filter: drop-shadow(6px 6px 0 ${(props) => props.theme.dropShadow});
      transition: filter 0.3s;
      &:hover {
        filter: drop-shadow(0 0 0 ${(props) => props.theme.dropShadow});
      }
    }

    &:nth-child(-n + 3) a.active {
      border-bottom: ${(props) => props.theme.font} solid 1px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: ${(props) => props.theme.font};
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
`;

export default function Nav() {
  return (
    <NavItems>
      <Ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {/* <li>
          <NavLink to="/work">Work</NavLink>
        </li> */}
        <li>
          <NavLink to="/design">Design</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </Ul>
    </NavItems>
  );
}
