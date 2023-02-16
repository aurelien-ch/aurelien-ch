import styled from "styled-components";
import Tilt from 'react-parallax-tilt';

const Card = () => {

  return (
    <TiltContainer>
      <Tilt
        scale={1.07}
        transitionSpeed={1000}
        glareEnable={true}
        glareMaxOpacity={1}
        glareColor="#d1c1de"
        glarePosition="all"
      >
        <Container>

        </Container>
      </Tilt>
    </TiltContainer>
  );
};

export default Card;

const TiltContainer = styled.div`
  .glare-wrapper {
    border-radius: 20px !important;
  }
`;

const Container = styled.div`
  height: 460px;
  width: 320px;
  background-color: #ebebeb;
  border-radius: 20px;
`;
