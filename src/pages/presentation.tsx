import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import TypeWriter from "../components/type-writer";
import Card from "../components/card";
import ScrollDown from "../components/scroll-down";

const Presentation = () => {
  return (
    <>
      <Container>
        <Headlines>
          <Fade triggerOnce>
            <MyNameIs>
              <TypeWriter text={"Bonjour ! Je m'appelle"} />
            </MyNameIs>
          </Fade>
          <Fade
            triggerOnce
            cascade
            damping={.2}
            direction="left"
          >
            <FirstName>
              Aurélien
            </FirstName>
            <LastName>
              Charpilienne
            </LastName>
          </Fade>
          <Fade triggerOnce delay={1000}>
            <MyJobIs>
              <TypeWriter
                text={"Et je suis"}
                delay={1000}
              />
            </MyJobIs>
          </Fade>
          <Fade triggerOnce delay={1250}>
            <ProfessionContainer>
              <span>&#123;</span>
              <Profession>
                Développeur Web & Mobile Fullstack
              </Profession>
              <span>&#125;</span>
            </ProfessionContainer>
          </Fade>
        </Headlines>
        <Fade triggerOnce direction="up">
          <Card />
        </Fade>
      </Container>
      <Fade triggerOnce delay={1750}>
        <ScrollDown />
      </Fade>
    </>
  );
};

export default Presentation;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Headlines = styled.div`
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
  color: rgba(255, 255, 255, .4);
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
      color: rgba(77, 132, 208, 1);
      margin-right: .8vw;
    }

    &:last-child {
      color: rgba(156, 38, 113, 1);
      margin-left: .6vw;
    }
  }
`;

const Profession = styled.div`
  font-size: 2.2vw;
  background: linear-gradient(
    135deg,
    rgba(69, 151, 226, 1) 0%,
    rgba(185, 46, 134, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
`;