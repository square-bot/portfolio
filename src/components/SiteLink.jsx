import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  max-width: 400px;
  @media (min-width: 1440px) {
    max-width: 600px;
  }
`;

const WindowWrapper = styled.div`
  height: 0;
  padding-top: calc(9 / 14 * 100%);
  position: relative;
`;

const Window = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px ${(props) => props.theme.font};
  box-shadow: 10px 10px 0 ${(props) => props.theme.secondaryColor};
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 0 ${(props) => props.theme.secondaryColor};
    cursor: pointer;
  }
`;

const TopBar = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid ${(props) => props.theme.font};
  display: flex;
  align-items: center;
`;
const Dot = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  border: 1px solid ${(props) => props.theme.font};
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondaryColor};
  @media (min-width: 1440px) {
    height: 15px;
    width: 15px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  img {
    opacity: 1;
    display: block;

    /* width: 100%; */
    height: 100%;
    margin: 0 auto;
    transform: scale(1);
    transition: 0.3s;
    &:hover {
      opacity: 0.6;
      transform: scale(1.2);
    }
  }
`;
export default function SiteLink({ photo }) {
  return (
    <Div>
      <WindowWrapper>
        <Window>
          <TopBar>
            <Dot />
            <Dot />
            <Dot />
          </TopBar>
          <ImageContainer>
            <img src={photo} alt="" />
          </ImageContainer>
        </Window>
      </WindowWrapper>
    </Div>
  );
}
