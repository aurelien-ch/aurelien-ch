import styled from "styled-components";
import { useTranslation } from "react-i18next";
import HTMLReactParser from "html-react-parser";

import projects from "@/data/projects";
import theme from "@/utils/theme";
import { IProject } from "@/types/projects";
import { GradientText } from "@/utils/styles";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleContainer>
        <TitleBackground>
          <Radial1 />
          <Radial2 />
          <Radial3 />
        </TitleBackground>
        <Title>{t("projects.title")}</Title>
      </TitleContainer>
      <ProjectsContainer>
        {projects.map((project: IProject, index: number) => (
          <Project key={index} style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}>
            <Mockups>
              {project.mockups.map((mockup: string, mockupIndex: number) => (
                <MockupContainer
                  key={mockupIndex}
                  style={{
                    transform: `translateX(${mockupIndex % 2 === 0 ? 0 : index % 2 === 0 ? 2 : -2}rem)`,
                  }}
                >
                  <Mockup src={mockup} alt={project.name} />
                </MockupContainer>
              ))}
            </Mockups>
            <Content>
              <Name>{project.name}</Name>
              <Description>{HTMLReactParser(t(project.descriptionKey))}</Description>
              <ReviewContainer>
                <NoteContainer>
                  <Note>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} src={"/icons/star.svg"} alt={"Star"} />
                    ))}
                  </Note>
                  <Reviewer>
                    {project.reviewerName} <span>— {project.reviewerRole}</span>
                  </Reviewer>
                </NoteContainer>
                <Review>
                  <StartQuote>“</StartQuote>
                  {HTMLReactParser(t(project.reviewKey))}
                  <EndQuote>”</EndQuote>
                </Review>
              </ReviewContainer>
            </Content>
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
  gap: 6rem;
  padding: 8rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleContainer = styled.div`
  position: relative;
  align-self: center;
  overflow: visible;
  padding: 4rem;
`;

const TitleBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Radial = styled.div`
  position: absolute;
  height: 20rem;
  width: 100%;
  filter: blur(5rem);
  opacity: 0.5;
`;

const Radial1 = styled(Radial)`
  background: radial-gradient(50% 50% at 50% 50%, ${theme.radial1} 50%, transparent);
  transform: translateX(-15rem);
`;

const Radial2 = styled(Radial)`
  background: radial-gradient(50% 50% at 50% 50%, ${theme.radial2} 50%, transparent);
`;

const Radial3 = styled(Radial)`
  background: radial-gradient(50% 50% at 50% 50%, ${theme.radial3} 50%, transparent);
  transform: translateX(15rem);
`;

const Title = styled.div`
  mix-blend-mode: overlay;
  opacity: 0.5;
  font-weight: 700;
  font-size: 8rem;
`;

const Project = styled.div`
  width: 100%;
  display: flex;
  gap: 8rem;
  padding: 10rem 4rem;
`;

const Mockups = styled.div`
  display: flex;
  flex-direction: column;
`;

const MockupContainer = styled.div`
  background-color: #293649;
  border: 0.1rem solid #747474;
  border-radius: 1rem;
  padding: 1rem;
  margin: -1.4rem 0;
`;

const Mockup = styled.img`
  height: auto;
  width: 50rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Name = styled(GradientText)`
  font-size: 5rem;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 1.6rem;

  span {
    color: white;
    font-weight: 600;
  }

  ul {
    padding-top: 0.4rem;
    padding-left: 3rem;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Note = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const StarIcon = styled.img`
  height: auto;
  width: 1.8rem;
`;

const Review = styled.div`
  position: relative;
  font-size: 1.6rem;

  span {
    font-size: 10rem;
    opacity: 0.1;
    font-weight: 600;
  }
`;

const StartQuote = styled.span`
  position: absolute;
  top: -3rem;
  left: -3rem;
`;

const EndQuote = styled.span`
  position: absolute;
  bottom: -7rem;
  right: 2rem;
`;

const Reviewer = styled.div`
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  transform: translateY(0.1rem);

  span {
    color: rgba(255, 255, 255, 0.7);
  }
`;
