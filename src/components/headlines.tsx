import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

import { GradientText } from "@/utils/styles";
import { FIRST_NAME, LAST_NAME } from "@/utils/globals";

const Headlines = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Fade triggerOnce delay={250}>
        <Context>{t("hero.myNameIs")}</Context>
      </Fade>
      <Fade triggerOnce cascade damping={0.2} direction={"left"} delay={500}>
        <FirstName>{FIRST_NAME}</FirstName>
        <LastName>{LAST_NAME}</LastName>
      </Fade>
      <Fade triggerOnce delay={1250}>
        <Context>{t("hero.iAmA")}</Context>
      </Fade>
      <Fade triggerOnce delay={1500}>
        <ProfessionContainer>
          <span>&#123;</span>
          <Profession>{t("hero.profession")}</Profession>
          <span>&#125;</span>
        </ProfessionContainer>
      </Fade>
    </Container>
  );
};

export default Headlines;

const Container = styled.div``;

const Context = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 1rem;
  margin-bottom: 1.4rem;
`;

const FirstName = styled.div`
  color: white;
  font-size: 10rem;
  font-weight: 700;
  line-height: 95%;
`;

const LastName = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 10rem;
  font-weight: 700;
  transform: translateY(-1rem);
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const ProfessionContainer = styled.div`
  display: flex;

  span {
    font-size: 4rem;
    line-height: 85%;

    &:first-child {
      color: #559be6;
      margin-right: 0.8rem;
    }

    &:last-child {
      color: #9c388e;
      margin-left: 0.6rem;
    }
  }
`;

const Profession = styled(GradientText)`
  font-size: 3.2rem;
  font-weight: 600;
`;
