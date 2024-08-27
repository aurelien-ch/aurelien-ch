import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";

import theme from "@/utils/theme";
import { FIRST_NAME, SCHOOL, EMAIL, PHONE, LOCATION } from "@/utils/globals";

const Card = () => {
  const { t } = useTranslation();

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
            <Container ref={containerRef}>
              {!isSafari ? <BackgroundShape /> : null}
              <ProfileImageShadow />
              <ProfileImage src={"/images/photo.jpeg"} alt={"Profile picture"} $3d={tiltEnabled} />
              <Lines>
                <Line>
                  <Emoji>🧑🏻</Emoji>
                  <DotsSeparator />
                  <Label>{FIRST_NAME}</Label>
                </Line>
                <Line>
                  <Emoji>💻</Emoji>
                  <DotsSeparator />
                  <Label>{t("hero.professionShort")}</Label>
                </Line>
                <Line>
                  <Emoji>🎓</Emoji>
                  <DotsSeparator />
                  <Label>{SCHOOL}</Label>
                </Line>
                <Line>
                  <Emoji>✉️</Emoji>
                  <DotsSeparator />
                  <Label>{EMAIL}</Label>
                </Line>
                <Line>
                  <Emoji>📞</Emoji>
                  <DotsSeparator />
                  <Label>{PHONE}</Label>
                </Line>
                <Line>
                  <Emoji>📍</Emoji>
                  <DotsSeparator />
                  <Label>{LOCATION}</Label>
                </Line>
              </Lines>
            </Container>
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

const Container = styled.div`
  height: 50rem;
  width: 34rem;
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
  transition: transform 0.5s ease-in-out;
`;

const Lines = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  padding: 0 3rem;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 1.4rem;
  transform: translate3d(0, 0, 0.01rem);
`;

const Emoji = styled.div`
  font-size: 1.8rem;
  transform: translateY(0.2rem) translateZ(1rem);
`;

const DotsSeparator = styled.div`
  flex: 1;
  border-bottom: 0.1rem dotted rgba(255, 255, 255, 0.8);
  margin: 0 0.7rem;
  transform: translateY(-0.3rem);
`;

const Label = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transform: translateZ(1rem);
`;
