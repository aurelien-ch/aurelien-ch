import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import GradientText from "@/components/gradient-text";

const Headlines = () => {
  return (
    <Container>
      <Fade triggerOnce delay={250}>
        <ContextLine>Bonjour ! Je m&apos;appelle</ContextLine>
      </Fade>
      <Fade triggerOnce cascade damping={0.2} direction={"left"} delay={500}>
        <FirstName>Aurélien</FirstName>
        <LastName>Charpilienne</LastName>
      </Fade>
      <Fade triggerOnce delay={1250}>
        <ContextLine>Et je suis</ContextLine>
      </Fade>
      <Fade triggerOnce delay={1500}>
        <ProfessionContainer>
          <span>&#123;</span>
          <GradientText
            text={"Développeur Web & Mobile Fullstack"}
            style={{ fontSize: "3.2rem", fontWeight: 600 }}
          />
          <span>&#125;</span>
        </ProfessionContainer>
      </Fade>
    </Container>
  );
};

export default Headlines;

const Container = styled.div``;

const ContextLine = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const FirstName = styled.div`
  font-size: 10rem;
  font-weight: 700;
`;

const LastName = styled.div`
  font-size: 10rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  transform: translateY(-1rem);
  margin-bottom: 3rem;
`;

const ProfessionContainer = styled.div`
  display: flex;

  span {
    font-size: 4rem;
    line-height: 85%;

    &:first-child {
      color: #559be6;
      margin-right: 0.8rem;
    }

    &:last-child {
      color: #9c388e;
      margin-left: 0.6rem;
    }
  }
`;
