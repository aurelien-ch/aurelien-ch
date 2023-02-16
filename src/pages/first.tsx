import styled from "styled-components";

import Card from "../components/card";

const First = () => {
  return (
    <Container>
      <Name>
        <FirstName>
          Aurélien
        </FirstName>
        <LastName>
          Charpilienne
        </LastName>
      </Name>
      <Card />
    </Container>
  );
};

export default First;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
`;

const FirstName = styled.div`
  font-size: 7vw;
`;

const LastName = styled.div`
  font-size: 7vw;
  color: #b6b6b6;
`;