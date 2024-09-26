import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import HTMLReactParser from "html-react-parser";

import projects from "@/data/projects";
import { media } from "@/utils/responsive";
import { GradientText } from "@/utils/styles";
import { IProject } from "@/types/projects";
import { useResize } from "@/providers/resize-context";
import ImageViewer from "@/components/image-viewer";
import RadialTitle from "@/components/radial-title";
import Review from "@/components/review";

const Projects = () => {
  const { t } = useTranslation();
  const { isMobile } = useResize();

  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <ImageViewer image={expandedImage} setImage={setExpandedImage} />
      <Container>
        <RadialTitle title={t("projects.title")} />
        <ProjectsContainer>
          {projects.map((project: IProject, index: number) => (
            <ProjectContainer key={index}>
              <Project
                style={{
                  flexDirection: isMobile
                    ? "column-reverse"
                    : index % 2 === 0
                      ? "row"
                      : "row-reverse",
                }}
              >
                <Mockups>
                  {project.mockups?.map((mockup: string, mockupIndex: number) => (
                    <Fade
                      key={mockupIndex}
                      triggerOnce
                      direction={index % 2 === 0 ? "left" : "right"}
                    >
                      <MockupContainer
                        $expandLabel={t("projects.expand")}
                        style={{
                          transform: `translateX(${mockupIndex % 2 === 0 ? 0 : index % 2 === 0 ? 2 : -2}rem)`,
                          ...(isMobile &&
                            (index % 2 === 0
                              ? { marginRight: "1.6rem" }
                              : { marginLeft: "1.6rem" })),
                        }}
                        onClick={() => setExpandedImage(mockup)}
                      >
                        <Mockup src={mockup} alt={project.name} />
                      </MockupContainer>
                    </Fade>
                  ))}
                </Mockups>
                <Content>
                  <Fade triggerOnce cascade damping={0.1} direction={"up"}>
                    <NameContainer>
                      <Name>{project.name}</Name>
                      <a
                        href={project.visitLink}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        style={{ transform: `translateY(${isMobile ? 0.4 : 0.5}rem)` }}
                      >
                        <OpenLinkButton>
                          <OpenLinkLabel>{t("projects.visit")}</OpenLinkLabel>
                          <OpenLinkIcon src={"/icons/open-link.svg"} alt={"Open"} />
                        </OpenLinkButton>
                      </a>
                    </NameContainer>
                    <Description>{HTMLReactParser(t(project.descriptionKey))}</Description>
                    <Review review={project.review} />
                  </Fade>
                </Content>
              </Project>
              {project.secondReview ? (
                <Fade triggerOnce direction={"up"} delay={400}>
                  <Review review={project.secondReview} />
                </Fade>
              ) : null}
            </ProjectContainer>
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

  @media ${media.mobile} {
    gap: 0;
    padding: 8rem 3rem;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 10rem 4rem;

  @media ${media.mobile} {
    padding: 6rem 0;
  }
`;

const Project = styled.div`
  width: 100%;
  display: flex;
  gap: 8rem;

  @media ${media.mobile} {
    gap: 6rem;
  }
`;

const Mockups = styled.div`
  display: flex;
  flex-direction: column;
`;

const MockupContainer = styled.div<{ $expandLabel: string }>`
  position: relative;
  overflow: hidden;
  background-color: #293649;
  box-shadow: 2rem 2rem 5rem rgba(0, 0, 0, 0.1);
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-left: 0.1rem solid rgba(255, 255, 255, 0.2);
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
    content: "${(p) => p.$expandLabel}";
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

  @media ${media.mobile} {
    width: 100%;
  }
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

  @media ${media.mobile} {
    font-size: 4rem;
  }
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

  @media ${media.mobile} {
    padding: 0.5rem 0.8rem;
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
    padding-left: 2rem;
  }
`;
