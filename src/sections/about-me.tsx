import styled from "styled-components";
import { useTranslation } from "react-i18next";
import HTMLReactParser from "html-react-parser";

import { GradientText } from "@/utils/styles";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("aboutMe.title")}</Title>
      <Content>
        <Line>{HTMLReactParser(t("aboutMe.line1"))}</Line>
        <Line>{HTMLReactParser(t("aboutMe.line2"))}</Line>
        <Line>{HTMLReactParser(t("aboutMe.line3"))}</Line>
        <Line>{HTMLReactParser(t("aboutMe.line4"))}</Line>
        <Line>{HTMLReactParser(t("aboutMe.line5"))}</Line>
        <Line>{HTMLReactParser(t("aboutMe.line6"))}</Line>
      </Content>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Line = styled.div`
  font-size: 2rem;

  span {
    font-weight: 600;
  }
`;
