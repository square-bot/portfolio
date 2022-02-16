import React, { useState, useEffect } from "react";

import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const FormWrapper = styled.form`
  max-width: 500px;
`;

const InputWrapperName = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  label {
    text-transform: uppercase;
    padding: 10px 0;
  }
  input,
  .text-area {
    color: ${(props) => props.theme.font};
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.heroParagraphFont};
    background-color: transparent;
    padding: 7px 0;
    font-size: 16px;
    font-family: "lato", sans-serif;
  }
`;

const InputWrapperEmail = styled(InputWrapperName)``;
const InputWrapperText = styled(InputWrapperName)``;
const InputWrapperSubmit = styled.div`
  margin: 20px 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 30px;
    font-size: 16px;
    color: ${(props) => props.theme.font};
    background-color: ${(props) => props.theme.secondaryColor};
    border: 1px solid black;
    filter: drop-shadow(6px 6px 0 ${(props) => props.theme.dropShadow});
    transition: filter 0.3s;
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0 0 0 ${(props) => props.theme.dropShadow});
    }
  }
`;

const ErrorMessage = styled.p`
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: red;
`;

export default function ContactForm({ submitForm }) {
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [dataCorrect, setDataCorrect] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    if (!values.name) {
      errors.name = "Name is required.";
    }
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/^\S+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.message) {
      errors.message = "Message is required.";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setDataCorrect(true);
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({"form-name": "contact", ...values }),
      });
    }
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataCorrect) {
      submitForm(true);
    }
  }, [errors, dataCorrect, submitForm]);

  return (
    <FormWrapper name="contact" method="post" onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value="contact"/>
      <InputWrapperName>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </InputWrapperName>
      <ErrorMessage>{errors.name}</ErrorMessage>
      <InputWrapperEmail>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </InputWrapperEmail>
      <ErrorMessage>{errors.email}</ErrorMessage>
      <InputWrapperText>
        <label>message</label>
        <TextareaAutosize
          type="textarea"
          name="message"
          className="text-area"
          value={values.message}
          onChange={handleChange}
        />
      </InputWrapperText>
      <ErrorMessage>{errors.message}</ErrorMessage>
      <InputWrapperSubmit>
        <button type="submit" >
          Send
        </button>
      </InputWrapperSubmit>
    </FormWrapper>
  );
}



// onClick={handleFormSubmit}