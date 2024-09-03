import styled from "styled-components";

import Headlines from "@/components/headlines";
import Card from "@/components/card";
import ScrollDown from "@/components/scroll-down";

interface Props {
  scrollY: number;
}

const Hero = (p: Props) => {
  return (
    <Container
      $scale={`${Math.max(1.01 - scrollY / 2000, 0.96)}, ${Math.max(1.01 - p.scrollY / 3000, 0.98)}`}
    >
      <Headlines />
      <Card />
      <ScrollDown />
    </Container>
  );
};

export default Hero;

const Container = styled.div<{ $scale: string }>`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    transform: scale(${(p) => p.$scale});
    border-radius: 2rem;
  }
`;
