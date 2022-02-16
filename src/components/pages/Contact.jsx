import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm";
import FormSuccessful from "../FormSuccessful";
import ContactGraphic from "../svg/ContactGraphic";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 0 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    min-height: 50vh;
    margin-top: 200px;
  }
`;
const ContactFormWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    padding-bottom: 20px;
  }
  h3 {
    padding: 10px 0 10px 0;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 18px;
  }
`;

const Graphic = styled.div`
  width: 60%;
  max-width: 300px;
  align-self: center;
  margin-bottom: 20px;
`;

const contactContainer = {
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

export default function Contact() {
  const [formSubmited, setFormSubmited] = useState(false);

  const submitForm = () => {
    setFormSubmited(true);
  };

  const formSubmission = formSubmited ? (
    <FormSuccessful />
  ) : (
    <>
      <h2>Contact</h2>
      <ContactForm submitForm={submitForm} />
      <h3>Email</h3>
      <p>jerzypaczkowski1@gmail.com</p>
    </>
  );

  if (formSubmited) {
    setTimeout(() => {
      setFormSubmited(false);
    }, 5000);
  }

  return (
    <MainWrapper
      as={motion.section}
      variants={contactContainer}
      initial={"hidden"}
      animate={"show"}
      exit="exit"
    >
      <Graphic>
        <ContactGraphic />
      </Graphic>
      <ContactFormWrapper>{formSubmission}</ContactFormWrapper>
    </MainWrapper>
  );
}
