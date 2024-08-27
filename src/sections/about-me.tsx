import styled from "styled-components";

import { GradientText } from "@/utils/styles";

const AboutMe = () => {
  return (
    <Container>
      <Column>
        <Title>À propos de moi</Title>
        <Content></Content>
      </Column>
      <Column></Column>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  display: flex;
  gap: 5rem;
  padding: 8rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 5rem;
`;

const Content = styled.div``;
