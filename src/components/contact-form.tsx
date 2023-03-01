import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";


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
        <SendText>Envoyer</SendText>
        <Oval
          color={"white"}
          secondaryColor={"rgba(255, 255, 255, .5)"}
          strokeWidth={5}
          strokeWidthSecondary={5}
        />
      </SendButton>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const NameContainer = styled.div`
  display: flex;
  gap: 1vw;

  input {
    flex: 1;
  }
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, .1);
  border-radius: 1vw;
  padding: 1vw 1.5vw;;
  border: none;
  outline: none;
  color: white;
  font-size: 1vw;
`;

const TextArea = styled.textarea`
  background-color: rgba(255, 255, 255, .1);
  border-radius: 1vw;
  padding: 1vw 1.5vw;;
  border: none;
  outline: none;
  color: white;
  font-size: 1vw;
  resize: none;
`;

const SendText = styled.div`
  color: white;
  font-size: 1vw;
  font-weight: bold;
  transition: .4s;
`;

const SendButton = styled.button<{ $loading: boolean }>`
  position: relative;
  width: fit-content;
  align-self: flex-end;
  background-color: rgba(255, 255, 255, .1);
  border: none;
  border-radius: .8vw;
  padding: 1vw 1.5vw;;
  transition: .4s;
  cursor: pointer;
  pointer-events: ${p => p.$loading ? "none" : "auto"};

  > div {
    padding: 0 !important;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${SendText} {
    opacity: ${p => p.$loading ? 0 : 1};
  }

  svg {
    height: 1.5vw;
    width: 1.5vw;
    opacity: ${p => p.$loading ? 1 : 0};
    transition: .4s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
  }
`;