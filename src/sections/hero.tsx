import styled from "styled-components";

import Headlines from "@/components/headlines";
import Card from "@/components/card";

const Hero = () => {
  return (
    <Container>
      <Headlines />
      <Card />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
