import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";

import resp from "../utils/resp";

import { ReactComponent as SendIcon } from "../assets/icons/send.svg";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      setLoading(true);

      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
        .then(() => formRef.current?.reset())
        .catch(() => null)
        .finally(() => setLoading(false));
    }
  };

  return (
    <Form
      ref={formRef}
      onSubmit={sendEmail}
    >
      <NameContainer>
        <Input
          required
          name={"last_name"}
          placeholder={"Nom"}
        />
        <Input
          required
          name={"first_name"}
          placeholder={"Prénom"}
        />
      </NameContainer>
      <Input
        required
        type={"email"}
        name={"reply_to"}
        placeholder={"Email"}
      />
      <TextArea
        required
        name={"message"}
        placeholder={"Votre message"}
        rows={5}
      ></TextArea>
      <SendButton
        type={"submit"}
        $loading={loading}
      >
        <SendIconContainer>
          <SendIcon />
        </SendIconContainer>
        <LoadingIconContainer>
          <Oval
            color={"white"}
            secondaryColor={"rgba(255, 255, 255, .5)"}
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        </LoadingIconContainer>
      </SendButton>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${resp(1)};
`;

const NameContainer = styled.div`
  display: flex;
  gap: ${resp(1)};

  input {
    flex: 1;
  }
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, .1);
  border-radius: ${resp(1)};
  padding: ${resp(1)} ${resp(1.5)};
  border: none;
  color: white;
  font-size: ${resp(1)};
`;

const TextArea = styled.textarea`
  background-color: rgba(255, 255, 255, .1);
  border-radius: ${resp(1)};
  padding: ${resp(1)} ${resp(1.5)};
  border: none;
  color: white;
  font-size: ${resp(1)};
  resize: none;
`;

const SendIconContainer = styled.div`
  transition: .4s;

  svg {
    display: block;
    height: ${resp(1.5)};
    width: ${resp(1.5)};
  }
`;

const LoadingIconContainer = styled.div`
  transition: .4s;

  svg {
      height: ${resp(1.3)};
      width: ${resp(1.3)};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0;
  }
`;

const SendButton = styled.button<{ $loading: boolean }>`
  position: absolute;
  bottom: ${resp(.7)};
  right: ${resp(.7)};
  width: fit-content;
  align-self: flex-end;
  background-color: rgba(255, 255, 255, .1);
  border: none;
  border-radius: ${resp(.8)};
  padding: ${resp(.8)};
  transition: .4s;
  cursor: pointer;
  pointer-events: ${p => p.$loading ? "none" : "auto"};

  * {
    padding: 0 !important;
  }

  &:hover {
    transform: scale(1.07);
  }

  ${SendIconContainer} {
    opacity: ${p => p.$loading ? 0 : 1};
  }

  ${LoadingIconContainer} {
    opacity: ${p => p.$loading ? 1 : 0};
  }
`;