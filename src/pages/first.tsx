import styled from "styled-components";

import Card from "../components/card";

const First = () => {
  return (
    <Container>
      <Headlines>
        <ContextLine>
          Bonjour ! Je m'appelle
        </ContextLine>
        <FirstName>
          Aurélien
        </FirstName>
        <LastName>
          Charpilienne
        </LastName>
        <ContextLine>
          Et je suis
        </ContextLine>
        <ProfessionContainer>
          <span>&#123;</span>
          <Profession>
            Développeur Web & Mobile Fullstack
          </Profession>
          <span>&#125;</span>
        </ProfessionContainer>
      </Headlines>
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

const Headlines = styled.div`
  font-weight: bold;
`;

const ContextLine = styled.div`
  font-family: monospace;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2vw;
  margin-left: 1vw;
  margin-bottom: 1.5vw;

  &:first-of-type {
    margin-bottom: 1vw;
  }
`;

const FirstName = styled.div`
  font-size: 7vw;
  color: white;
`;

const LastName = styled.div`
  font-size: 7vw;
  color: rgba(255, 255, 255, 0.4);
  transform: translateY(-.5vw);
  margin-bottom: 3vw;
`;

const ProfessionContainer = styled.div`
  display: flex;

  span {
    font-weight: normal;
    font-size: 3vw;
    transform: translateY(-.6vw);

    &:first-child {
      color: rgba(77, 132, 208, 1);
      margin-right: .6vw;
    }

    &:last-child {
      color: rgba(156, 38, 113, 1);
      margin-left: .4vw;
    }
  }
`;

const Profession = styled.div`
  font-size: 2.3vw;
  background: linear-gradient(
    135deg,
    rgba(69, 151, 226, 1) 0%,
    rgba(185, 46, 134, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
`;