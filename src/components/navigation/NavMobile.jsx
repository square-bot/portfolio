import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";

const NavItems = styled.nav`
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #1c1e20;
  z-index: ${({ open }) => (open ? 10 : 0)};
  transition: visibility 0.3s linear, opacity 0.3s;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  li {
    padding: 30px 0;
  }
`;
const StyledLink = styled(NavLink)`
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  text-decoration: none;
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

export default function Nav({ open, setOpen }) {
  const closeMobileMenu = () => setOpen(false);
  return (
    <NavItems open={open}>
      <Ul
        as={motion.ul}
        variants={container}
        initial="hidden"
        animate={open ? "show" : "hidden"}
      >
        <motion.li variants={item} transition={item}>
          <StyledLink to="/about" onClick={closeMobileMenu}>
            About
          </StyledLink>
        </motion.li>
        <motion.li variants={item}>
          <StyledLink exact to="/" onClick={closeMobileMenu}>
            Home
          </StyledLink>
        </motion.li>
        {/* <motion.li variants={item}>
          <StyledLink to="/work" onClick={closeMobileMenu}>
            Work
          </StyledLink>
        </motion.li> */}
        <motion.li variants={item}>
          <StyledLink to="/design" onClick={closeMobileMenu}>
            Design
          </StyledLink>
        </motion.li>
        <motion.li variants={item}>
          <StyledLink to="contact" onClick={closeMobileMenu}>
            Contact
          </StyledLink>
        </motion.li>
      </Ul>
    </NavItems>
  );
}
