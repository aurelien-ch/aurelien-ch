import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { GradientText } from "../theme";

const Reviews = () => {
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
    </Container>
  );
};

export default Reviews;

const Container = styled.div`
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 3vw;
  margin-bottom: 1.8vw;
`;