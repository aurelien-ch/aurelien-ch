import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import resp from "../utils/resp";
import { GradientText } from "../theme";

import ContactForm from "./contact-form";

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
  font-size: ${resp(3)};
  margin-bottom: ${resp(1.8)};
`;