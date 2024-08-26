import styled from "styled-components";

import Hero from "@/sections/hero";

const Home = () => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300vh;
`;
