import styled from "styled-components";

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
  /* align-items: center; */
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5vw;

  > div {
    flex: 1;
  }
`;

const Column = styled.div`
  flex: 1;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  /* gap: 5vw; */
`;