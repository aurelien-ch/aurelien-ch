import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";

import { resp, devices } from "../utils/responsive";

import Image from "../assets/card-image.jpeg";
import { ReactComponent as HoverText } from "../assets/handwrite-texts/hover.svg";

const Card = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverText, setHoverText] = useState<boolean>(true);
  const [tiltEnabled, setTiltEnabled] = useState<boolean>(false);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useEffect(() => {
    setTimeout(() => {
      setTiltEnabled(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(containerRef.current, {
        duration: .7,
        rotationX: 20,
        rotationY: 180,
        ease: "sine.in",
      })
      .to(containerRef.current, {
        duration: 1.3,
        rotationX: 0,
        rotationY: 360,
        ease: "sine.out",
      });
  }, [containerRef]);

  return (
    <div>
      <Fade
        triggerOnce
        direction={"up"}
        duration={2000}
      >
        <TiltContainer
          tiltEnabled={tiltEnabled}
          onMouseEnter={() => setHoverText(false)}
          onMouseLeave={() => setHoverText(true)}
        >
          <Tilt
            scale={1.1}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={.6}
            glareColor={"lightblue"}
            glarePosition={"all"}
          >
            <CardContainer ref={containerRef}>
              {
                !isSafari ? (
                  <BackgroundShape />
                ) : null
              }
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
      </Fade>
      <HoverTextContainer visible={hoverText}>
        <Fade
          triggerOnce
          delay={3500}
          direction={"up"}
        >
          <HoverText />
        </Fade>
      </HoverTextContainer>
    </div>
  );
};

export default Card;

const HoverTextContainer = styled.div<{ visible: boolean }>`
  opacity: ${p => p.visible ? .5 : 0};
  transform: translateY(${p => resp(p.visible ? 0 : 1)});
  transition: ${p => p.visible ? 1 : .3}s;
  margin-top: ${resp(1.5)};
`;

const TiltContainer = styled.div<{ tiltEnabled: boolean }>`
  pointer-events: ${p => p.tiltEnabled ? "auto" : "none"};

  .glare-wrapper {
    border-radius: ${resp(1.5)} !important;
  }

  * {
    transform-style: preserve-3d;
  }

  @media ${devices.tablet} {
    transform: scale(.9);
  }
`;

const CardContainer = styled.div`
  height: ${resp(32)};
  width: ${resp(22)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${resp(1.5)};
  box-shadow: ${resp(.4)} ${resp(.4)} ${resp(3)} ${resp(.2)} #5e4a63;
  user-select: none;
  background: ${p => p.theme.gradients.cardGradient};
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, .2);
  border-radius: ${resp(1.5)};
  background: radial-gradient(120% ${resp(16.8)} at 50% 0, rgba(255, 255, 255, .1) 100%, transparent);
`;

const ProfileImageShadow = styled.div`
  position: absolute;
  top: 0;
  width: 80%;
  aspect-ratio: 1;
  background: radial-gradient(circle, black 0%, transparent 60%);
  transform: translate3d(0, 0, ${resp(.01)});
`;

const ProfileImage = styled.img`
  background-color: #81609c;
  display: block;
  width: 60%;
  aspect-ratio: 1;
  border-radius: 100%;
  border: ${resp(.3)} solid rgba(255, 255, 255, .8);
  box-sizing: border-box;
  transform: translateZ(${resp(2)});
  margin-bottom: ${resp(1.4)};
`;

const CardLine = styled.div<{ isSafari: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: ${resp(1.2)};
  color: white;
  font-size: ${resp(1)};
  transform: translate3d(0, 0, ${resp(.01)});

  span{
    font-family: CourierPrime;
    transform: translate3d(0, ${p => resp(p.isSafari ? .45 : .2)}, ${resp(.5)});

    &:first-of-type {
      transform: translate3d(0, 0, ${resp(.5)}) scale(${p => p.isSafari ? 1 : 1.2});
    }
  }
`;

const DotSeparator = styled.div`
  flex: 1;
  border-bottom: ${resp(.14)} dotted white;
  margin: 0 ${resp(.7)};
  transform: translateY(${resp(-.3)});
`;