import styled from "styled-components";

import Headlines from "@/components/headlines";

const Hero = () => {
  return (
    <Container>
      <Headlines />
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
