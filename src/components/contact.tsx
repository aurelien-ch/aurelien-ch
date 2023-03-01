import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
// import ReactGlobe from "react-globe.gl";

import ContactForm from "./contact-form";

import { GradientText } from "../theme";

const Contact = () => {
  return (
    <div>
      <Fade
        triggerOnce
        direction={"down"}
      >
        <Title>
          Me Contacter
        </Title>
      </Fade>
      <ContactContainer>
        <ContactForm />
        <ReactGlobeContainer>
          {/* <ReactGlobe
        backgroundColor={"rgba(0, 0, 0, 0)"}
      /> */}
        </ReactGlobeContainer>
      </ContactContainer>
    </div>
  );
};

export default Contact;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 3vw;
  margin-bottom: 1.8vw;
`;

const ContactContainer = styled.div`
  display: flex;
`;

const ReactGlobeContainer = styled.div`
  flex: 1;
`;