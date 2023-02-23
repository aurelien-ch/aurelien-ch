import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";

import { IProject } from "../types";
import { GradientText } from "../theme";

import AnimatedIcon from "./animated-icon";
import ImageViewer from "./image-viewer";

import { ReactComponent as ExpandIcon } from "../assets/icons/expand.svg";

import UsenseIcon from "../assets/projects-icons/usense.png"
import MyTelevisionIcon from "../assets/projects-icons/mytelevision.png"
import MonumaIcon from "../assets/projects-icons/monuma.png"
import SophrautoIcon from "../assets/projects-icons/sophrauto.png"

import UsenseMockup from "../assets/projects-mockups/usense.png"
import MyTelevisionMockup from "../assets/projects-mockups/mytelevision.png"
import MonumaMockup from "../assets/projects-mockups/monuma.png"
import SophrautoMockup from "../assets/projects-mockups/sophrauto.png"

const Projects = () => {
  const projectsRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const projects: IProject[] = [
    {
      name: "Usense",
      logo: UsenseIcon,
      mockup: UsenseMockup,
    },
    {
      name: "MyTelevision",
      logo: MyTelevisionIcon,
      mockup: MyTelevisionMockup,
    },
    {
      name: "Monuma",
      logo: MonumaIcon,
      mockup: MonumaMockup,
    },
    {
      name: "Sophrauto",
      logo: SophrautoIcon,
      mockup: SophrautoMockup,
    },
  ];

  useEffect(() => {
    projectsRefs.current = projectsRefs.current.slice(0, projects.length);
  }, [projects.length]);

  useEffect(() => {
    if (activeIndex !== null) {
      gsap.to(projectsRefs.current, {
        flex: .7,
        duration: 2.3,
        ease: "elastic(1, .4)",
      });

      gsap.to(projectsRefs.current[activeIndex], {
        flex: 1.3,
        duration: 2.3,
        ease: "elastic(1, .3)",
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
            projects.map((p: IProject, index: number) => (
              <GsapContainer
                key={index}
                ref={(e: HTMLDivElement) => projectsRefs.current[index] = e}
                onClick={() => setActiveIndex(index)}
              >
                <Fade
                  triggerOnce
                  delay={200 + index * 150}
                  direction={"up"}
                >
                  <Project showMockup={activeIndex === index}>
                    <MockupImageContainer onClick={() => setZoomedImage(p.mockup)}>
                      <MockupImage src={p.mockup} />
                      <ExpandIcon />
                    </MockupImageContainer>
                    <LogoContainer>
                      <AnimatedIcon src={p.logo} />
                    </LogoContainer>
                  </Project>
                </Fade>
              </GsapContainer>
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

const GsapContainer = styled.div`
  flex: 1;
`;

const MockupImageContainer = styled.div`
  z-index: 1;
  position: absolute;
  width: 90%;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    height: 2.5vw;
    width: 2.5vw;
    padding: .5vw;
    transition: .4s;
  }

  &:hover svg {
    transform: translate(-50%, -50%) scale(1.15);
  }
`;

const MockupImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 1.5vw;
  filter: brightness(.5);
`;

const LogoContainer = styled.div`
  img {
    height: 5vw;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Project = styled.div<{ showMockup: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13.2vw;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 2.5vw;
  cursor: ${p => p.showMockup ? "auto" : "pointer"};
  transition: .4s;

  ${MockupImageContainer} {
    pointer-events: ${p => p.showMockup ? "auto" : "none"};
    opacity: ${p => p.showMockup ? 1 : 0};
    transition: opacity ${p => p.showMockup ? .8 : .2}s ${p => p.showMockup ? .4 : 0}s;
  }

  ${LogoContainer} img:not(:first-of-type) {
    opacity: ${p => p.showMockup ? 1 : 0};
  }

  &:hover ${LogoContainer} img:not(:first-of-type) {
    opacity: 1;
  }
`;