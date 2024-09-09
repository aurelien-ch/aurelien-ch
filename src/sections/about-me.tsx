import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import HTMLReactParser from "html-react-parser";

import { GradientText } from "@/utils/styles";
import Socials from "@/components/socials";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Content>
        <Fade triggerOnce direction={"up"}>
          <Title>{t("aboutMe.title")}</Title>
        </Fade>
        <Description>
          <Fade triggerOnce cascade damping={0.1} direction={"up"}>
            <Line>{HTMLReactParser(t("aboutMe.description.line1"))}</Line>
            <Line>{HTMLReactParser(t("aboutMe.description.line2"))}</Line>
            <Line>{HTMLReactParser(t("aboutMe.description.line3"))}</Line>
            <Line>{HTMLReactParser(t("aboutMe.description.line4"))}</Line>
            <Line>{HTMLReactParser(t("aboutMe.description.line5"))}</Line>
            <Line>{HTMLReactParser(t("aboutMe.description.line6"))}</Line>
          </Fade>
        </Description>
      </Content>
      <Socials />
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  padding: 8rem;
`;

const Content = styled.div`
  width: 90rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled(GradientText)`
  font-weight: 800;
  font-size: 5rem;
`;

const Description = styled.div`
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
