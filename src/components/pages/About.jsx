import React from "react";
import { InView } from "react-intersection-observer";
import styled from "styled-components";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import animationData from "../anim/window.json";
import RobotAbout from "../svg/RobotAbout";
import InformationSvg from "../svg/InformationSvg";
import WireframeSvg from "../svg/WireframeSvg";
import DesignSvg from "../svg/DesignSvg";
import CodeSvg from "../svg/CodeSvg";
import SupportSvg from "../svg/SupportSvg";

const AboutWrapper = styled.div``;

const AboutHeader = styled.section`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AnimationWrapper = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 50px;
  div.anim svg path {
    stroke: ${(props) => props.theme.font};
    fill: ${(props) => props.theme.font};
  }
`;

const ParagraphOne = styled.p`
  font-size: 25px;
  text-align: center;
  line-height: 150%;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${(props) => props.theme.font};
  span {
    background-color: ${(props) => props.theme.secondaryColor};
    font-weight: 400;
  }
  span.dots {
    background-color: transparent;
    color: ${(props) => props.theme.secondaryColor};
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1024px) {
    font-size: 35px;
  }
`;
const ParagraphTwo = styled(ParagraphOne)`
  padding-top: 30px;
  font-size: 20px;
`;
const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50vw;
  height: 50vw;
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondaryColor};
  z-index: -1;
`;

const InfoSection = styled.section`
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
const InfoDescription = styled.div`
  margin: 40px 0;
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

    @media (min-width: 1440px) {
      font-size: 25px;
    }
  }
`;

const WireSection = styled(InfoSection)`
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;
const WireDescription = styled(InfoDescription)``;

const DesignSection = styled(InfoSection)``;
const DesignDescription = styled(InfoDescription)``;

const CodeSection = styled(WireSection)``;
const CodeDescription = styled(InfoDescription)``;

const SupportSection = styled(InfoSection)``;
const SupportDescription = styled(InfoDescription)``;

const MotionWrapperInformation = styled.div`
  width: 70%;
  max-width: 500px;
  text-align: center;
`;
const MotionWrapperWire = styled(MotionWrapperInformation)`
  width: 100%;
  max-width: 700px;
`;

const MotionWrapperDesign = styled(MotionWrapperInformation)``;
const MotionWrapperCode = styled(MotionWrapperInformation)``;
const MotionWrapperSupport = styled(MotionWrapperInformation)``;

const aboutContainer = {
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

export default function About() {
  return (
    <AboutWrapper
      as={motion.div}
      variants={aboutContainer}
      initial={"hidden"}
      animate={"show"}
      exit="exit"
    >
      <AboutHeader>
        <ParagraphOne>
          Web development <span>steps</span>
          <span className="dots">...</span>
          <br />
          <span className="dots">...</span> from <span>idea</span> to{" "}
          <span>deployment</span>
          <span className="dots">.</span>
        </ParagraphOne>
        <ParagraphTwo>
          Always <span>mobile-friendly</span>
          <br />
          <span className="dots">...</span>always <span>cross-browser</span>{" "}
          compatibility<span className="dots">.</span>
        </ParagraphTwo>
        <AnimationWrapper>
          <Circle />
          <RobotAbout />
          <Lottie className={"anim"} loop animationData={animationData} play />
        </AnimationWrapper>
      </AboutHeader>
      <InfoSection>
        <InfoDescription>
          <h3>
            <span>01</span>
          </h3>
          <h2>Gathering information</h2>
          <p>
            A clear understanding of the website's main goals and target
            audience!
          </p>
        </InfoDescription>
        <InView threshold={0.75}>
          {({ ref, inView, entry }) => (
            <>
              <MotionWrapperInformation
                as={motion.div}
                ref={ref}
                inView={inView}
                variants={animation}
                initial="hidden"
                animate={inView && "show"}
              >
                <InformationSvg />
              </MotionWrapperInformation>
            </>
          )}
        </InView>
      </InfoSection>
      <WireSection>
        <WireDescription>
          <h3>
            <span>02</span>
          </h3>
          <h2>Sitemap and Wireframe</h2>
          <p>
            When building easy-to-navigate and user-friendly websites, I always
            include wireframing into the process - a visual representation of
            the user interface that I'll create.
          </p>
        </WireDescription>
        <InView threshold={0.75}>
          {({ ref, inView, entry }) => (
            <>
              <MotionWrapperWire
                as={motion.div}
                ref={ref}
                inView={inView}
                variants={animation}
                initial="hidden"
                animate={inView && "show"}
              >
                <WireframeSvg />
              </MotionWrapperWire>
            </>
          )}
        </InView>
      </WireSection>
      <DesignSection>
        <DesignDescription>
          <h3>
            <span>03</span>
          </h3>
          <h2>Design</h2>
          <p>
            Page layout full of colors! All the visual content, such as images
            and photos, is created at this step. That's when an application like
            Photoshop and Illustrator kicks in. Other apps I'm using are Adobe
            Xd, Adobe After Effects, and Adobe Dimensions.
          </p>
        </DesignDescription>
        <InView threshold={0.75}>
          {({ ref, inView, entry }) => (
            <>
              <MotionWrapperDesign
                as={motion.div}
                ref={ref}
                inView={inView}
                variants={animation}
                initial="hidden"
                animate={inView && "show"}
              >
                <DesignSvg />
              </MotionWrapperDesign>
            </>
          )}
        </InView>
      </DesignSection>
      <CodeSection>
        <CodeDescription>
          <h3>
            <span>04</span>
          </h3>
          <h2>Coding!</h2>
          <p>
            Now the logic comes in! I'm creating all required interactivity,
            animations, etc. Either static website or dynamic React application,
            UX is always a top priority. That's why, for all animations, I'm
            always using the best technologies available, such as GSAP or Framer
            Motion.
          </p>
        </CodeDescription>
        <InView threshold={0.75}>
          {({ ref, inView, entry }) => (
            <>
              <MotionWrapperCode
                as={motion.div}
                ref={ref}
                inView={inView}
                variants={animation}
                initial="hidden"
                animate={inView && "show"}
              >
                <CodeSvg />
              </MotionWrapperCode>
            </>
          )}
        </InView>
      </CodeSection>
      <SupportSection>
        <SupportDescription>
          <h3>
            <span>05</span>
          </h3>
          <h2>Maintenance</h2>
          <p>
            Once the site has launched, it doesn't mean the end of the process.
            This last and final step including, but is not limited to, ongoing
            support, fresh content, and security updates.
          </p>
        </SupportDescription>
        <InView threshold={0.75}>
          {({ ref, inView, entry }) => (
            <>
              <MotionWrapperSupport
                as={motion.div}
                ref={ref}
                inView={inView}
                variants={animation}
                initial="hidden"
                animate={inView && "show"}
              >
                <SupportSvg />
              </MotionWrapperSupport>
            </>
          )}
        </InView>
      </SupportSection>
    </AboutWrapper>
  );
}
