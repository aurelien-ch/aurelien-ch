import styled from "styled-components";

import { resp, devices } from "../utils/responsive";

import Accordion from "../components/accordion";

import FreelanceExp from "../data/experiences/freelance";
import ProExp from "../data/experiences/pro";
import EducationExp from "../data/experiences/education";

const Third = () => {
  return (
    <Container>
      <Center>
        <Accordion
          title={"Expériences Freelance"}
          data={FreelanceExp}
        />
        <Column>
          <Accordion
            title={"Expériences Pro"}
            data={ProExp}
          />
          <Accordion
            title={"Diplôme & Formation"}
            data={EducationExp}
          />
        </Column>
      </Center>
    </Container>
  );
};

export default Third;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media ${devices.tablet} {
    height: auto;
    margin-top: ${resp(5)};
  }
`;

const Center = styled.div`
  height: ${resp(50)};
  width: 100%;
  display: flex;
  gap: ${resp(3)};

  > div {
    flex: 1;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${resp(3)};
`;