import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Arrow from "../svg/Arrow";
// import SiteLink from "../SiteLink";
// import pub from "../../assets/icons/pub-min.jpg";
// import d2d from "../../assets/icons/d2d-min.jpg";

const SiteSectionOne = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin-top: 120px;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 300px;
  }
`;

const SiteDescription = styled.div`
  margin: 40px auto;
  max-width: 500px;
  h3 {
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 20px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    letter-spacing: 4px;
    @media (min-width: 768px) {
      font-size: 50px;
    }
    span {
      background-color: ${(props) => props.theme.secondaryColor};
      padding: 0 10px;
    }
  }
  h2 {
    display: inline-block;
    font-size: 25px;
    border-bottom: solid ${(props) => props.theme.font} 1px;
    span {
      color: ${(props) => props.theme.secondaryColor};
    }
    @media (min-width: 1440px) {
      font-size: 30px;
    }
  }
  p {
    max-width: 500px;
    font-size: 20px;
    line-height: 150%;
    padding: 20px 0;
    font-weight: 300;
    span {
      background-color: ${(props) => props.theme.secondaryColor};
      padding: 0 5px;
    }
    @media (min-width: 1440px) {
      font-size: 25px;
    }
  }

  div {
    font-size: 16px;
    display: inline-block;

    cursor: pointer;
    span {
      margin-left: 10px;
      svg {
        transition: 0.3s;
      }
    }
    &:hover {
      svg {
        transform: translateX(15px);
      }
    }
  }
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const SiteSectionTwo = styled(SiteSectionOne)`
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

const workContainer = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      type: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 1,
      type: "easeInOut",
    },
  },
};

export default function Work() {
  return (
    <motion.div
      variants={workContainer}
      initial={"hidden"}
      animate={"show"}
      exit="exit"
    >
      <SiteSectionOne>
        {/* <SiteLink photo={pub} /> */}
        <SiteDescription>
          <h3>
            <span>01</span>
          </h3>
          <h2>
            Red Bear White Bear<span>.</span>
          </h2>
          <p>
            Hi, my name is <span>Jerzy</span>. I'm a freelance developer and
            designer. I am specialized in front-end development, animations and
            micro-interactions.
          </p>
          <div>
            Visit Site
            <span>
              <Arrow />
            </span>
          </div>
        </SiteDescription>
      </SiteSectionOne>
      <SiteSectionTwo>
        {/* <SiteLink photo={d2d} /> */}
        <SiteDescription>
          <h3>
            <span>02</span>
          </h3>
          <h2>
            D2D International<span>.</span>
          </h2>
          <p>
            Hi, my name is <span>Jerzy</span>. I'm a freelance developer and
            designer. I am specialized in front-end development, animations and
            micro-interactions.
          </p>
          <div>
            Visit Site
            <span>
              <Arrow />
            </span>
          </div>
        </SiteDescription>
      </SiteSectionTwo>
    </motion.div>
  );
}
