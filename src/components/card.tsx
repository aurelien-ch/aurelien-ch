import styled from "styled-components";
import Tilt from "react-parallax-tilt";

import Image from "../assets/card-image.jpeg";

const Card = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <TiltContainer>
      <Tilt
        scale={1.075}
        transitionSpeed={1000}
        glareEnable={true}
        glareMaxOpacity={.6}
        glareColor="lightblue"
        glarePosition="all"
      >
        <CardContainer>
          <BackgroundShape />
          <ProfileImageShadow />
          <ProfileImage src={Image} />
          <CardLine isSafari={isSafari}>
            <span>🧑🏻</span><DotSeparator /><span>Aurélien</span>
          </CardLine>
          <CardLine isSafari={isSafari}>
            <span>💻</span><DotSeparator /><span>Dev Web</span>
          </CardLine>
          <CardLine isSafari={isSafari}>
            <span>📱</span><DotSeparator /><span>Dev Mobile</span>
          </CardLine>
          <CardLine isSafari={isSafari}>
            <span>🎓</span><DotSeparator /><span>Epitech</span>
          </CardLine>
          <CardLine isSafari={isSafari}>
            <span>📍</span><DotSeparator /><span>Paris</span>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5vw;
  box-shadow: .4vw .4vw 3vw .2vw #5e4a63;
  user-select: none;
  background: linear-gradient(
    135deg,
    #9c388e 0%,
    #559be6 100%
  );
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 1.5vw;
  background: radial-gradient(
    120% 16.8vw at 50% 0,
    rgba(255, 255, 255, .1) 100%,
    transparent
  );
`;

const ProfileImageShadow = styled.div`
  position: absolute;
  top: 0;
  width: 80%;
  aspect-ratio: 1;
  background: radial-gradient(
    circle,
    black 0%,
    transparent 60%
  );
`;

const ProfileImage = styled.img`
  background-color: #81609c;
  display: block;
  width: 60%;
  aspect-ratio: 1;
  border-radius: 100%;
  border: .3vw solid rgba(255, 255, 255, .8);
  box-sizing: border-box;
  transform: translateZ(2vw);
  margin-bottom: 1.4vw;
`;

const CardLine = styled.div<any>`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 1.2vw;
  color: white;
  font-size: 1vw;

  span{
    font-family: CourierPrime;
    transform: translate3d(0, ${p => p.isSafari ? ".45vw" : ".2vw"}, .5vw);

    &:first-of-type {
      transform: translate3d(0, 0, .5vw) scale(${p => p.isSafari ? 1 : 1.2});
    }
  }
`;

const DotSeparator = styled.div`
  flex: 1;
  border-bottom: .14vw dotted white;
  margin: 0 .7vw;
  transform: translateY(-.3vw);
`;