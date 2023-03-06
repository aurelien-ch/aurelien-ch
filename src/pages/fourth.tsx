import styled from "styled-components";

import Review from "../components/review";
import Contact from "../components/contact";

import ReviewsData from "../data/reviews";

const Fourth = () => {
  return (
    <Container>
      <Row>
        <Review data={ReviewsData[0]} />
        <Review data={ReviewsData[1]} />
      </Row>
      <Row>
        <Review data={ReviewsData[2]} />
        <Contact />
      </Row>
    </Container>
  );
};

export default Fourth;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vw;
`;

const Row = styled.div`
  display: flex;
  gap: 2vw;
`;