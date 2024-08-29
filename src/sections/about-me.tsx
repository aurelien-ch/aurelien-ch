import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import HTMLReactParser from "html-react-parser";
import { Parallax, Background } from "react-parallax";

interface Props {
  scrollY: number;
}

const AboutMe = (p: Props) => {
  const { t } = useTranslation();

  return (
    <Parallax strength={200} style={{ overflow: "visible" }}>
      <Background>
        <ParallaxBackground src={"/shapes/atom.svg"} alt={"Atom"} $rotate={p.scrollY / 30} />
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
  top: 5rem;
  left: 20rem;
  height: auto;
  width: 40rem;
  transform: rotate(${(p) => 0 + p.$rotate}deg);
  opacity: 0.2;
`;

const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  font-size: 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Line = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;

  span {
    color: white;
    font-weight: 600;
  }
`;
