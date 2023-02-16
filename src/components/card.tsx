import styled from "styled-components";
import Tilt from "react-parallax-tilt";

import Image from "../assets/card-image.jpeg";

const Card = () => {

  return (
    <TiltContainer>
      <Tilt
        scale={1.07}
        transitionSpeed={1000}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="white"
        glarePosition="all"
      >
        <CardContainer>
          <ProfileImageBorder>
            <ProfileImage src={Image} />
          </ProfileImageBorder>
        </CardContainer>
      </Tilt>
    </TiltContainer>
  );
};

export default Card;

const TiltContainer = styled.div`
  .glare-wrapper {
    border-radius: 1.5vw !important;
  }

  * {
    transform-style: preserve-3d;
  }
`;

const CardContainer = styled.div`
  height: 32vw;
  width: 22vw;
  background: linear-gradient(135deg, #9c388e 0%, #559be6 100%);
  border-radius: 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.4vw 0.4vw 3vw 0.2vw #5e4a63;
`;

const ProfileImageBorder = styled.div`
  width: 50%;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 1.2vw solid white;
  padding: 0.8vw;
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 0.2vw solid white;
  box-sizing: border-box;
  transform: translateZ(2vw);
`;