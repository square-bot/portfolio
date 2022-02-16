import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Lottie from "react-lottie-player";
import animationData from "../anim/data.json";
import AboutSvg from "../svg/AboutSvg";
import Arrow from "../svg/Arrow";
import WorkSvg from "../svg/WorkSvg";
import ContactSvg from "../svg/ContactSvg";

const HomeWrapper = styled.div`
  overflow: hidden;
`;

const SectionWrapper = styled.section`
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    width: 50%;
    align-items: flex-start;
    justify-content: center;
  }
`;
const ParagraphTop = styled.p`
  text-align: center;
  padding: 0 10px;
  font-size: 10vw;
  font-weight: 700;
  color: ${(props) => props.theme.heroParagraphFont};
  span {
    background-color: ${(props) => props.theme.secondaryColor};
    padding: 0 5px;
  }

  @media (min-width: 425px) {
    font-size: 50px;
  }
  @media (min-width: 1024px) {
    text-align: left;
    padding-left: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
    padding-left: 0;
  }
`;
const ParagraphMiddle = styled(ParagraphTop)`
  color: ${(props) => props.theme.font};
`;

const ParagraphBottom = styled(ParagraphTop)``;

const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 50%;
  }
  div {
    width: 200px;
    @media (min-width: 425px) {
      width: 300px;
    }
    @media (min-width: 768px) {
      width: 350px;
    }
    @media (min-width: 1024px) {
      width: 420px;
    }
    @media (min-width: 1440px) {
      width: 600px;
    }
  }

  svg {
    width: 50%;
    path {
      fill: ${(props) => props.theme.robo};
      stroke: ${(props) => props.theme.robo};
    }
  }

  #elipse path {
    fill: ${(props) => props.theme.secondaryColor};
    stroke: ${(props) => props.theme.secondaryColor};
  }
`;

const Button = styled.div`
  margin: 40px 0 0 0;
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
  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 250px 0;
  }
`;
const WorkSection = styled(AboutSection)`
  margin: 60px 0;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    margin: 250px 0;
  }
`;
const ContactSection = styled(AboutSection)``;

const AboutDescription = styled.div`
  margin: 40px 0;
  max-width: 500px;
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

  a {
    color: ${(props) => props.theme.font};

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
  }
`;

const MotionWrapperAbout = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

const MotionWrapperWork = styled(MotionWrapperAbout)``;
const MotionWrapperContact = styled(MotionWrapperAbout)``;

const WorkDescription = styled(AboutDescription)``;
const ContactDescription = styled(AboutDescription)``;

const homeContainer = {
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

const animation = {
  show: {
    opacity: 1,
    scale: 1,
    skewX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },

  hidden: {
    opacity: 0,
    scale: 0,
    skewX: 20,
  },
};
export default function Home() {
  return (
    <HomeWrapper
      as={motion.div}
      variants={homeContainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <SectionWrapper>
        <Hero>
          <ParagraphTop>
            <span>&lt;Frontend developer&gt;</span>
          </ParagraphTop>
          <ParagraphMiddle>&amp;&amp;</ParagraphMiddle>
          <ParagraphBottom>
            <span>&lt;/designer&gt;;</span>
          </ParagraphBottom>
          <Button>
            <Link to="/Contact">Contact</Link>
          </Button>
        </Hero>
        <AnimationWrapper>
          <Lottie loop animationData={animationData} play />
        </AnimationWrapper>
      </SectionWrapper>
      <AboutSection>
        <AboutDescription>
          <h2>
            About <span>.</span>
          </h2>
          <p>
            Hi, my name is <span>Jerzy</span>. I'm a freelance developer and
            designer. I am specialized in front-end development, animations and
            micro-interactions.
          </p>
          <Link to="/About">
            <div>
              Read More
              <span>
                <Arrow />
              </span>
            </div>
          </Link>
        </AboutDescription>
        <InView threshold={0.75}>
          {({ ref, inView, entry }) => (
            <>
              <MotionWrapperAbout
                as={motion.div}
                ref={ref}
                inView={inView}
                variants={animation}
                initial="hidden"
                animate={inView && "show"}
              >
                <AboutSvg />
              </MotionWrapperAbout>
            </>
          )}
        </InView>
      </AboutSection>
      <WorkSection>
        <WorkDescription>
          <h2>
            Work <span>.</span>
          </h2>
          <p>
            I'm doing my <span>best</span> to bring top-level quality design to
            all my websites. My goal is to draw users and potential customers.
            That's why <span>modern</span> and creative <span>design</span> is a
            must!
          </p>
          <Link to="/Design">
            <div>
              Read More
              <span>
                <Arrow />
              </span>
            </div>
          </Link>
        </WorkDescription>
        <InView threshold={0.75}>
          {({ ref, inView, entry }) => (
            <>
              <MotionWrapperWork
                as={motion.div}
                ref={ref}
                inView={inView}
                variants={animation}
                initial="hidden"
                animate={inView && "show"}
              >
                <WorkSvg inView={inView} />
              </MotionWrapperWork>
            </>
          )}
        </InView>
      </WorkSection>
      <ContactSection>
        <ContactDescription>
          <h2>
            Contact <span>.</span>
          </h2>
          <p>
            If you're looking to <span>get in touch</span> with me you're in the
            right place! Click link below or <span>email</span> me on{" "}
            <span>jerzypaczkowski1@gmail.com</span>.
          </p>
          <Link to="/Contact">
            <div>
              Read More
              <span>
                <Arrow />
              </span>
            </div>
          </Link>
        </ContactDescription>
        <InView threshold={0.75}>
          {({ ref, inView, entry }) => (
            <>
              <MotionWrapperContact
                as={motion.div}
                ref={ref}
                inView={inView}
                variants={animation}
                initial="hidden"
                animate={inView && "show"}
              >
                <ContactSvg inView={inView} />
              </MotionWrapperContact>
            </>
          )}
        </InView>
      </ContactSection>
    </HomeWrapper>
  );
}
