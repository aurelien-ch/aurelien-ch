import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import Headlines from "../components/headlines";
import Card from "../components/card";
import ScrollDown from "../components/scroll-down";

const First = () => {
  return (
    <>
      <Container>
        <Headlines />
        <Fade triggerOnce direction="up">
          <Card />
        </Fade>
      </Container>
      <Fade triggerOnce delay={1750}>
        <ScrollDown />
      </Fade>
    </>
  );
};

export default First;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;