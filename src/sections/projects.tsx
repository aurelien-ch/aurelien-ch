import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { GradientText } from "@/utils/styles";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("projects.title")}</Title>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  padding: 8rem;
`;

const Title = styled(GradientText)`
  text-align: center;
  font-weight: 700;
  font-size: 5rem;
`;
