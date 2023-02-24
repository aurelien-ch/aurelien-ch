import styled from "styled-components";

import Freelance from "../components/freelance";

const Second = () => {
  return (
    <Container>
      <Freelance />
    </Container>
  );
};

export default Second;

const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 5vw;
`;