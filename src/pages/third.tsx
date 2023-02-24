import styled from "styled-components";

import Freelance from "../components/freelance";

const Third = () => {
  return (
    <Container>
      <Freelance />
    </Container>
  );
};

export default Third;

const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 5vw;
`;