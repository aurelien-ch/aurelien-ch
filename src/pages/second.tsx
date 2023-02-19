import styled from "styled-components";

import AboutMe from "../components/about-me";

const Second = () => {
  return (
    <Container>
      <AboutMe />
    </Container>
  );
};

export default Second;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;