import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { GradientText } from "../theme";
import { resp, devices } from "../utils/responsive";

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
  font-size: ${resp(1.2)};
  font-weight: normal;
  color: rgba(255, 255, 255, .5);
  margin-left: ${resp(1)};

  @media ${devices.tablet} {
    font-size: ${resp(1.1)};
  }
`;

const MyNameIs = styled(ContextLine)`
  margin-bottom: ${resp(1)};

  @media ${devices.tablet} {
    margin-bottom: ${resp(.8)};
  }
`;

const MyJobIs = styled(ContextLine)`
  margin-bottom: ${resp(1.5)};

  @media ${devices.tablet} {
    margin-bottom: ${resp(1.3)};
  }
`;

const FirstName = styled.div`
  font-size: ${resp(7)};
  color: white;

  @media ${devices.tablet} {
    font-size: ${resp(4)};
  }
`;

const LastName = styled.div`
  font-size: ${resp(7)};
  color: rgba(255, 255, 255, .5);
  transform: translateY(${resp(-.5)});
  margin-bottom: ${resp(3)};

  @media ${devices.tablet} {
    font-size: ${resp(4)};
    margin-bottom: ${resp(1)};
  }
`;

const ProfessionContainer = styled.div`
  display: flex;

  span {
    font-weight: normal;
    font-size: ${resp(3)};
    transform: translateY(${resp(-.7)});

    @media ${devices.tablet} {
      font-size: ${resp(2.4)};
    }

    &:first-child {
      color: #559be6;
      margin-right: ${resp(.8)};
    }

    &:last-child {
      color: #9c388e;
      margin-left: ${resp(.6)};
    }
  }
`;

const Profession = styled(GradientText)`
  font-size: ${resp(2.2)};

  @media ${devices.tablet} {
    font-size: ${resp(1.4)};
  }
`;