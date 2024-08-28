import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import HTMLReactParser from "html-react-parser";
import { Parallax, Background } from "react-parallax";

import { GradientText } from "@/utils/styles";

interface Props {
  scrollY: number;
}

const AboutMe = (p: Props) => {
  const { t } = useTranslation();

  return (
    <Parallax strength={300} style={{ overflow: "visible" }}>
      <Background>
        <ParallaxBackground src={"/shapes/atom.svg"} alt={"Atom"} $rotate={p.scrollY / 40} />
      </Background>
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
    </Parallax>
  );
};

export default AboutMe;

const ParallaxBackground = styled.img<{ $rotate: number }>`
  position: absolute;
  top: 10rem;
  left: 20rem;
  height: auto;
  width: 40rem;
  transform: rotate(${(p) => p.$rotate}deg);
  opacity: 0.2;
`;

const Container = styled.div`
  width: 75%;
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
