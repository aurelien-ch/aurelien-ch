import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";

import ImageViewer from "./image-viewer";
import Project from "./project";

import { IProject } from "../types";
import { GradientText } from "../theme";

import ProjectsData from "../data/projects";

const Projects = () => {
  const projectsRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    projectsRefs.current = projectsRefs.current.slice(0, ProjectsData.length);
  }, []);

  useEffect(() => {
    if (activeIndex !== null) {
      gsap.to(projectsRefs.current, {
        flex: 1,
        duration: 2.3,
        ease: "elastic(1, .4)",
      });

      gsap.to(projectsRefs.current[activeIndex], {
        flex: 1.8,
        duration: 2.3,
        ease: "elastic(1, .3)",
      });
    } else {
      gsap.to(projectsRefs.current, {
        flex: 1,
        duration: 2.3,
        ease: "elastic(1, .4)",
      });
    }
  }, [activeIndex]);

  return (
    <>
      <ImageViewer
        src={zoomedImage}
        setZoomedImage={setZoomedImage}
      />
      <Container>
        <Fade
          triggerOnce
          direction={"down"}
        >
          <Title>
            Quelques projets
          </Title>
        </Fade>
        <ProjectsContainer>
          {
            ProjectsData.map((p: IProject, index: number) => (
              <Project
                key={index}
                index={index}
                eRef={(e: HTMLDivElement) => projectsRefs.current[index] = e}
                active={activeIndex === index}
                name={p.name}
                logo={p.logo}
                mockup={p.mockup}
                setActiveIndex={setActiveIndex}
                setZoomedImage={setZoomedImage}
              />
            ))
          }
        </ProjectsContainer>
      </Container>
    </>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2vw;
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 3vw;
`;

const ProjectsContainer = styled.div`
  display: flex;
  gap: 2.5vw;
`;