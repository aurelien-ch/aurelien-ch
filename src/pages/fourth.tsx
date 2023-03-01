import styled from "styled-components";

import Reviews from "../components/reviews";
import Contact from "../components/contact";

const Fourth = () => {
  return (
    <Container>
      <Reviews />
      <Contact />
    </Container>
  );
};

export default Fourth;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vw;
`;