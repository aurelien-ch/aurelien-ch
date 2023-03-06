import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import ContactForm from "./contact-form";

import { GradientText } from "../theme";

const Contact = () => {
  return (
    <Container>
      <Fade
        triggerOnce
        direction={"down"}
      >
        <Title>
          Soyez le prochain !
        </Title>
      </Fade>
      <ContactForm />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  flex: 1;
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 3vw;
  margin-bottom: 1.8vw;
`;