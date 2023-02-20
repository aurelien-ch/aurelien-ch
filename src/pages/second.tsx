import styled from "styled-components";

import AboutMe from "../components/about-me";
import Skills from "../components/skills";
import Projects from "../components/projects";

const Second = () => {
  return (
    <Container>
      <Flex>
        <AboutMe />
        <Skills />
      </Flex>
      <Projects />
    </Container>
  );
};

export default Second;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vw;
`;

const Flex = styled.div`
  display: flex;
  gap: 5vw;
`;