import styled from "styled-components";

import Headlines from "../components/headlines";
import Card from "../components/card";
import ScrollDown from "../components/scroll-down";

const First = () => {
  return (
    <>
      <Center>
        <Headlines />
        <Card />
      </Center>
      <ScrollDown />
    </>
  );
};

export default First;

const Center = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;