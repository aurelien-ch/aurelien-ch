import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { resp, devices } from "../utils/responsive";
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

  @media ${devices.tablet} {
    margin-top: ${resp(2)};
  }
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: ${resp(3)};
  margin-bottom: ${resp(1.8)};
`;