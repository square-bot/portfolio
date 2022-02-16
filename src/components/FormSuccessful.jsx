import React from "react";

import styled from "styled-components";
import ContactSvg from "./svg/ContactSvg";

const Div = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column-reverse;
`;

const SvgWrapper = styled.div`
  width: 80%;
  text-align: center;
`;

const Description = styled.div`
  text-align: center;
  padding-top: 40px;
`;

export default function FormSuccessful() {
  return (
    <Div>
      <SvgWrapper>
        <ContactSvg />
      </SvgWrapper>
      <Description>
        <h2>Thank you for your email.</h2>
        <p>Please expect a response from me as soon as possible.</p>
      </Description>
    </Div>
  );
}
