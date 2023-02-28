import styled from "styled-components";

import Reviews from "../components/reviews";

const Fourth = () => {
  return (
    <Container>
      <Reviews />
    </Container>
  );
};

export default Fourth;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;