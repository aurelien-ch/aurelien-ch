import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import HTMLReactParser from "html-react-parser";

import { GradientText } from "@/utils/styles";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Fade triggerOnce direction={"left"}>
        <Title>{t("aboutMe.title")}</Title>
      </Fade>
      <Content>
        <Fade triggerOnce cascade damping={0.1} direction={"left"}>
          <Line>{HTMLReactParser(t("aboutMe.line1"))}</Line>
          <Line>{HTMLReactParser(t("aboutMe.line2"))}</Line>
          <Line>{HTMLReactParser(t("aboutMe.line3"))}</Line>
          <Line>{HTMLReactParser(t("aboutMe.line4"))}</Line>
          <Line>{HTMLReactParser(t("aboutMe.line5"))}</Line>
          <Line>{HTMLReactParser(t("aboutMe.line6"))}</Line>
        </Fade>
      </Content>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  flex: 2.1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled(GradientText)`
  font-weight: 700;
  font-size: 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Line = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.8rem;

  span {
    color: white;
    font-weight: 600;
  }
`;
