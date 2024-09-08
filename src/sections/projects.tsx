import styled from "styled-components";
import { useTranslation } from "react-i18next";

import projects from "@/data/projects";
import { IProject } from "@/types/projects";
import { GradientText } from "@/utils/styles";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("projects.title")}</Title>
      <ProjectsContainer>
        {projects.map((project: IProject, index: number) => (
          <Project key={index}>
            <Mockups>
              {project.mockups.map((mockup: string, index: number) => (
                <MockupContainer
                  key={index}
                  style={{ transform: `translateX(${index % 2 === 0 ? 0 : 2}rem)` }}
                >
                  <Mockup key={index} src={mockup} alt={project.name} />
                </MockupContainer>
              ))}
            </Mockups>
          </Project>
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 8rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(GradientText)`
  text-align: center;
  font-weight: 700;
  font-size: 5rem;
`;

const Project = styled.div`
  display: flex;
  padding: 10rem 4rem;
`;

const Mockups = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1.4rem; */
`;

const MockupContainer = styled.div`
  background-color: #293649;
  border: 0.1rem solid #747474;
  border-radius: 1rem;
  padding: 1rem;
  margin: -2rem 0;
`;

const Mockup = styled.img`
  height: auto;
  width: 50rem;
`;
