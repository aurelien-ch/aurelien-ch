import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { GradientText } from "../theme";
import TypeWriter from "./type-writer";

const Headlines = () => {
  return (
    <Container>
      <Fade
        triggerOnce
        duration={500}
      >
        <MyNameIs>
          <TypeWriter text={"Bonjour ! Je m'appelle"} />
        </MyNameIs>
      </Fade>
      <Fade
        triggerOnce
        cascade
        damping={.2}
        direction={"left"}
      >
        <FirstName>
          Aurélien
        </FirstName>
        <LastName>
          Charpilienne
        </LastName>
      </Fade>
      <Fade
        triggerOnce
        duration={500}
        delay={1000}
      >
        <MyJobIs>
          <TypeWriter
            text={"Et je suis"}
            delay={1000}
          />
        </MyJobIs>
      </Fade>
      <Fade
        triggerOnce
        delay={1250}
      >
        <ProfessionContainer>
          <span>&#123;</span>
          <Profession>
            Développeur Web & Mobile Fullstack
          </Profession>
          <span>&#125;</span>
        </ProfessionContainer>
      </Fade>
    </Container>
  );
};

export default Headlines;

const Container = styled.div`
  font-weight: bold;
`;

const ContextLine = styled.div`
  font-size: 1.2vw;
  font-weight: normal;
  color: rgba(255, 255, 255, .5);
  margin-left: 1vw;
`;

const MyNameIs = styled(ContextLine)`
  margin-bottom: 1vw;
`;

const MyJobIs = styled(ContextLine)`
  margin-bottom: 1.5vw;
`;

const FirstName = styled.div`
  font-size: 7vw;
  color: white;
`;

const LastName = styled.div`
  font-size: 7vw;
  color: rgba(255, 255, 255, .5);
  transform: translateY(-.5vw);
  margin-bottom: 3vw;
`;

const ProfessionContainer = styled.div`
  display: flex;

  span {
    font-weight: normal;
    font-size: 3vw;
    transform: translateY(-.7vw);

    &:first-child {
      color: #559be6;
      margin-right: .8vw;
    }

    &:last-child {
      color: #9c388e;
      margin-left: .6vw;
    }
  }
`;

const Profession = styled(GradientText)`
  font-size: 2.2vw;
`;