import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import Review from "../components/review";
import Contact from "../components/contact";

import ReviewsData from "../data/reviews";

const Fourth = () => {
  return (
    <Container>
      <Row>
        <Fade
          triggerOnce
          cascade
          damping={.2}
          direction={"up"}
        >
          <Review data={ReviewsData[0]} />
          <Review data={ReviewsData[1]} />
        </Fade>
      </Row>
      <Row>
        <Fade
          triggerOnce
          cascade
          damping={.2}
          direction={"up"}
          delay={300}
        >
          <Review data={ReviewsData[2]} />
          <Contact />
        </Fade>
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

  > div {
    flex: 1;
    display: grid;
  }
`;