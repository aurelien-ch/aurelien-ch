import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";

import { resp, sizes, devices } from "../utils/responsive";
import { IProject } from "../types";
import { GradientText } from "../theme";

import ImageViewer from "./image-viewer";
import Project from "./project";

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
            Quelques Projets
          </Title>
        </Fade>
        <ProjectsContainer>
          {
            ProjectsData.map((p: IProject, index: number) => (
              <Project
                key={index}
                index={index}
                eRef={(e: HTMLDivElement) => projectsRefs.current[index] = e}
                active={window.innerWidth <= sizes.mobile ? true : activeIndex === index}
                data={p}
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
  gap: ${resp(2.2)};
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: ${resp(3)};
`;

const ProjectsContainer = styled.div`
  display: flex;
  gap: ${resp(2.5)};

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;