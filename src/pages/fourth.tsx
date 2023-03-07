import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { resp, devices } from "../utils/responsive";
import { GradientText } from "../theme";

import Review from "../components/review";
import Contact from "../components/contact";

import ReviewsData from "../data/reviews";

const Fourth = () => {
  return (
    <Container>
      <Fade
        triggerOnce
        direction={"down"}
      >
        <Title>
          Avis Clients
        </Title>
      </Fade>
      <RowsContainer>
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
      </RowsContainer>
    </Container>
  );
};

export default Fourth;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${devices.tablet} {
    height: auto;
    margin-top: ${resp(52)};
    margin-bottom: ${resp(5)};
  }
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: ${resp(3)};
  margin-bottom: ${resp(1.2)};

  @media ${devices.tablet} {
    margin-bottom: ${resp(1.8)};
  }
`;

const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${resp(2)};
`;

const Row = styled.div`
  display: flex;
  gap: ${resp(2)};

  > div {
    flex: 1;
    display: grid;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;