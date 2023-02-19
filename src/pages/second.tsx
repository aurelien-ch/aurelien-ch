import styled from "styled-components";

import AboutMe from "../components/about-me";
import Skills from "../components/skills";

const Second = () => {
  return (
    <Container>
      <AboutMe />
      <Skills />
    </Container>
  );
};

export default Second;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5vw;
`;