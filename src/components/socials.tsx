import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { LINKEDIN_URL, MALT_URL } from "@/utils/globals";

const Socials = () => {
  const { i18n } = useTranslation();

  return (
    <Container>
      <a href={LINKEDIN_URL} target={"_blank"} rel={"noreferrer"}>
        <Circle $index={1}>
          <LinkedInIcon src={"/logos/linkedin.svg"} alt={"LinkedIn"} />
        </Circle>
      </a>
      <a href={MALT_URL} target={"_blank"} rel={"noreferrer"}>
        <Circle $index={2}>
          <MaltIcon src={"/logos/malt.svg"} alt={"Malt"} />
        </Circle>
      </a>
      <a href={`/cv/${i18n.language}.pdf`} target={"_blank"} rel={"noreferrer"}>
        <Circle $index={3}>
          <CVIcon src={"/logos/cv.svg"} alt={"CV"} />
        </Circle>
      </a>
    </Container>
  );
};

export default Socials;

const Container = styled.div`
  position: relative;
  width: 26rem;
  height: 10rem;
  transform: translateY(3rem);
`;

const Circle = styled.div<{ $index: number }>`
  width: 12rem;
  aspect-ratio: 1;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.4rem 0.4rem 2rem rgba(0, 0, 0, 0.2);
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-left: 0.1rem solid rgba(255, 255, 255, 0.2);
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  ${(p) =>
    p.$index === 2
      ? `
    transform: scale(0.7);
    top: -9.7rem;
    left: 4rem;
  `
      : (p) =>
          p.$index === 3
            ? `
    transform: scale(0.8);
    top: -3.2rem;
    left: 10.6rem;
  `
            : ""};
`;

const Icon = styled.img`
  height: auto;
`;

const LinkedInIcon = styled(Icon)`
  width: 4rem;
  transform: translateX(0.1rem) translateY(-0.2rem);
`;

const MaltIcon = styled(Icon)`
  width: 5rem;
`;

const CVIcon = styled(Icon)`
  width: 4.5rem;
`;
