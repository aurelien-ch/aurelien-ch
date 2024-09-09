import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import HTMLReactParser from "html-react-parser";

import projects from "@/data/projects";
import theme from "@/utils/theme";
import { GradientText } from "@/utils/styles";
import { IProject } from "@/types/projects";
import ImageViewer from "@/components/image-viewer";

const Projects = () => {
  const { t } = useTranslation();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <ImageViewer image={expandedImage} setImage={setExpandedImage} />
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
                    expandLabel={t("projects.expand")}
                    style={{
                      transform: `translateX(${mockupIndex % 2 === 0 ? 0 : index % 2 === 0 ? 2 : -2}rem)`,
                    }}
                    onClick={() => setExpandedImage(mockup)}
                  >
                    <Mockup src={mockup} alt={project.name} />
                  </MockupContainer>
                ))}
              </Mockups>
              <Content>
                <NameContainer>
                  <Name>{project.name}</Name>
                  <a
                    href={project.visitLink}
                    target={"_blank"}
                    rel={"noreferrer"}
                    style={{ transform: "translateY(0.5rem)" }}
                  >
                    <OpenLinkButton>
                      <OpenLinkLabel>{t("projects.visit")}</OpenLinkLabel>
                      <OpenLinkIcon src={"/icons/open-link.svg"} alt={"Open"} />
                    </OpenLinkButton>
                  </a>
                </NameContainer>
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
    </>
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
  font-weight: 800;
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

const MockupContainer = styled.div<{ expandLabel: string }>`
  position: relative;
  overflow: hidden;
  background-color: #293649;
  border: 0.1rem solid #747474;
  border-radius: 1rem;
  padding: 1rem;
  margin: -1.4rem 0;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &::after {
    content: "${(p) => p.expandLabel}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
    font-weight: 500;
    text-shadow: 0 0 0.4rem black;
    opacity: 0;
    transition: opacity 0.3s;
  }
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

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Name = styled(GradientText)`
  font-size: 5rem;
  font-weight: 800;
`;

const OpenLinkButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 0.6rem 0.8rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const OpenLinkLabel = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
`;

const OpenLinkIcon = styled.img`
  height: auto;
  width: 0.8rem;
  opacity: 0.5;
  transform: translateY(0.05rem);
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
  gap: 0.5rem;
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
    opacity: 0.2;
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
