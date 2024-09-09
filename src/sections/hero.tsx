import React, { useMemo } from "react";
import styled from "styled-components";
import Particles from "@tsparticles/react";

import { media } from "@/utils/responsive";
import { useScroll } from "@/providers/scroll-context";
import particlesOptions from "@/utils/particles-options";
import Headlines from "@/components/headlines";
import Card from "@/components/card";
import ScrollDown from "@/components/scroll-down";

const MemoizedParticles = React.memo(() => <Particles options={particlesOptions} />);
MemoizedParticles.displayName = "Particles";

const Hero = () => {
  const scrollY = useScroll();

  const scale = useMemo(() => {
    return `${Math.max(1.01 - scrollY / 2000, 0.96)}, ${Math.max(1.01 - scrollY / 3000, 0.98)}`;
  }, [scrollY]);

  return (
    <Container>
      <AnimContainer $scale={scale}>
        <MemoizedParticles />
      </AnimContainer>
      <Headlines />
      <Card />
      <ScrollDown />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14rem;

  @media ${media.mobile} {
    gap: 8rem;
    flex-direction: column;
    padding: 8rem 6rem;
  }
`;

const AnimContainer = styled.div<{ $scale: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  transform: scale(${(p) => p.$scale});
  border-radius: 2rem;
`;
