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
        glareMaxOpacity={.8}
        glareColor="lightblue"
        glarePosition="all"
      >
        <CardContainer>
          <BackgroundShape />
          <ProfileImage src={Image} />
          <CardLine>
            <span>🧑🏻</span><DotSeparator />Aurélien
          </CardLine>
          <CardLine>
            <span>💻</span><DotSeparator />Dev Web
          </CardLine>
          <CardLine>
            <span>📱</span><DotSeparator />Dev Mobile
          </CardLine>
          <CardLine>
            <span>🎓</span><DotSeparator />Epitech
          </CardLine>
          <CardLine>
            <span>📍</span><DotSeparator />Paris
          </CardLine>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: .4vw .4vw 3vw .2vw #5e4a63;
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 1.5vw;
  background: radial-gradient(120% 16.8vw at 50% 0, rgba(255, 255, 255, .1) 100%, transparent);
`;

const ProfileImage = styled.img`
  display: block;
  width: 60%;
  aspect-ratio: 1;
  border-radius: 100%;
  border: .3vw solid rgba(255, 255, 255, .8);
  box-sizing: border-box;
  transform: translateZ(2vw);
  margin-bottom: 1.4vw;
`;

const CardLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 1.2vw;
  font-family: monospace;
  color: white;
  font-size: 1vw;

  span {
    transform: scale(1.2);
  }
`;

const DotSeparator = styled.div`
  flex: 1;
  border-bottom: .14vw dotted white;
  margin: 0 .7vw;
  transform: translateY(-.3vw);
`;