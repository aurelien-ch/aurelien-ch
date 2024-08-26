import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";

import theme from "@/utils/theme";

const Card = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tiltEnabled, setTiltEnabled] = useState<boolean>(false);

  const isSafari: boolean = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const revealDelay: number = 500;
  const revealDuration: number = 2000;

  useEffect(() => {
    setTimeout(() => {
      setTiltEnabled(true);
    }, revealDuration + revealDelay);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const timeline = gsap.timeline();

      timeline
        .to(containerRef.current, {
          duration: 0.7,
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
    }, revealDelay);
  }, [containerRef]);

  return (
    <div>
      <Fade triggerOnce direction={"up"} duration={revealDuration} delay={revealDelay}>
        <TiltContainer $tiltEnabled={tiltEnabled}>
          <Tilt
            scale={1.1}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.6}
            glareColor={"lightblue"}
            glarePosition={"all"}
          >
            <CardContainer ref={containerRef}>
              {!isSafari ? <BackgroundShape /> : null}
              <ProfileImageShadow />
              <ProfileImage src={"/images/photo.jpeg"} alt={"Profile picture"} $3d={tiltEnabled} />
              <CardLines>
                <CardLine>
                  <CardEmoji>🧑🏻</CardEmoji>
                  <DotSeparator />
                  <CardLabel>Aurélien</CardLabel>
                </CardLine>
                <CardLine>
                  <CardEmoji>💻</CardEmoji>
                  <DotSeparator />
                  <CardLabel>Dev Web</CardLabel>
                </CardLine>
                <CardLine>
                  <CardEmoji>📱</CardEmoji>
                  <DotSeparator />
                  <CardLabel>Dev Mobile</CardLabel>
                </CardLine>
                <CardLine>
                  <CardEmoji>🎓</CardEmoji>
                  <DotSeparator />
                  <CardLabel>Epitech</CardLabel>
                </CardLine>
                <CardLine>
                  <CardEmoji>📍</CardEmoji>
                  <DotSeparator />
                  <CardLabel>Paris</CardLabel>
                </CardLine>
              </CardLines>
            </CardContainer>
          </Tilt>
        </TiltContainer>
      </Fade>
    </div>
  );
};

export default Card;

const TiltContainer = styled.div<{ $tiltEnabled: boolean }>`
  pointer-events: ${(p) => (p.$tiltEnabled ? "auto" : "none")};

  .glare-wrapper {
    border-radius: 1.5rem !important;
  }

  * {
    transform-style: preserve-3d;
  }
`;

const CardContainer = styled.div`
  height: 46rem;
  width: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  border-radius: 1.5rem;
  box-shadow: 0.4rem 0.4rem 2rem 0.2rem ${theme.cardShadow};
  user-select: none;
  background: ${theme.cardGradient};
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  background: radial-gradient(120% 16.8rem at 50% 0, rgba(255, 255, 255, 0.1) 100%, transparent);
`;

const ProfileImageShadow = styled.div`
  position: absolute;
  top: 1.6rem;
  width: 80%;
  aspect-ratio: 1;
  background: radial-gradient(circle, black 0%, transparent 60%);
  transform: translate3d(0, 0, 0.1rem);
`;

const ProfileImage = styled.img<{ $3d: boolean }>`
  background-color: ${theme.cardShadow};
  display: block;
  width: 60%;
  aspect-ratio: 1;
  border-radius: 50rem;
  transform: translateZ(${(p) => (p.$3d ? 2 : 0.1)}rem);
  transition: transform 0.5s;
`;

const CardLines = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  padding: 0 3rem;
`;

const CardLine = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 1.4rem;
  transform: translate3d(0, 0, 0.01rem);
`;

const CardEmoji = styled.div`
  font-size: 1.6rem;
  transform: translateY(0.2rem) translateZ(1rem);
`;

const DotSeparator = styled.div`
  flex: 1;
  border-bottom: 0.1rem dotted rgba(255, 255, 255, 0.8);
  margin: 0 0.7rem;
  transform: translateY(-0.3rem);
`;

const CardLabel = styled.div`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  transform: translateZ(1rem);
`;