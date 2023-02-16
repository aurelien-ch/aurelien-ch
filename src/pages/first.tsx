import styled from "styled-components";

import Card from "../components/card";

const First = () => {
  return (
    <Container>
      <Headlines>
        <FirstName>
          Aurélien
        </FirstName>
        <LastName>
          Charpilienne
        </LastName>
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

const FirstName = styled.div`
  font-size: 7vw;
  color: white;
`;

const LastName = styled.div`
  font-size: 7vw;
  color: #b6b6b6;
`;

const ProfessionContainer = styled.div`
  display: flex;
  margin-top: 4vw;

  span {
    font-weight: normal;
    font-size: 3vw;
    transform: translateY(-0.6vw);

    &:first-child {
      color: rgba(77, 132, 208, 1);
      margin-right: 0.6vw;
    }

    &:last-child {
      color: rgba(156, 38, 113, 1);
      margin-left: 0.4vw;
    }
  }
`;

const Profession = styled.div`
  font-size: 2.3vw;
  background: linear-gradient(135deg, rgba(77, 132, 208, 1) 0%, rgba(156, 38, 113, 1) 100%);
  -webkit-background-clip: text;
  color: transparent;
`;