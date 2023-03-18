import styled from "styled-components";

import { resp, devices } from "../utils/responsive";

import Headlines from "../components/headlines";
import Card from "../components/card";
import ScrollDown from "../components/scroll-down";

const First = () => {
  return (
    <>
      <Container>
        <Headlines />
        <Card />
      </Container>
      <ScrollDown />
    </>
  );
};

export default First;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tablet} {
    height: 80vh;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: ${resp(4)};
    gap: ${resp(1)};
  }
`;