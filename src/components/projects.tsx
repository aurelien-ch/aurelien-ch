import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";

import { Project as ProjectType } from "../types";
import AnimatedIcon from "./animated-icon";

import Usense from "../assets/projects-icons/usense.png"
import MyTelevision from "../assets/projects-icons/mytelevision.png"
import Monuma from "../assets/projects-icons/monuma.png"
import Sophrauto from "../assets/projects-icons/sophrauto.png"


const Projects = () => {
  const projectsRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects: ProjectType[] = [
    {
      name: "Usense",
      logo: Usense,
    },
    {
      name: "MyTelevision",
      logo: MyTelevision,
    },
    {
      name: "Monuma",
      logo: Monuma,
    },
    {
      name: "Sophrauto",
      logo: Sophrauto,
    },
  ];

  useEffect(() => {
    projectsRefs.current = projectsRefs.current.slice(0, projects.length);
  }, [projects.length]);

  const expand = (index: number) => {
    gsap.to(projectsRefs.current, {
      flex: index === activeIndex ? 1 : .7,
      duration: 2.5,
      ease: "elastic(1, .4)",
    });

    gsap.to(projectsRefs.current[index], {
      flex: index === activeIndex ? 1 : 1.3,
      duration: 2.5,
      ease: "elastic(1, .3)",
    });
  };

  return (
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
          projects.map((p: ProjectType, index: number) => (
            <GsapContainer
              key={index}
              ref={(e: any) => projectsRefs.current[index] = e}
              onClick={() => {
                expand(index);
                setActiveIndex(activeIndex === index ? null : index);
              }}
            >
              <Fade
                triggerOnce
                delay={200 + index * 150}
                direction={"up"}
              >
                <Project>
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
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2vw;
`;

const Title = styled.div`
  width: fit-content;
  background: linear-gradient(
    135deg,
    #559be6 0%,
    #9c388e 100%
  );
  -webkit-background-clip: text;
  color: transparent;
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

const Project = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vw;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 2.5vw;
  cursor: pointer;
  transition: .4s;

  &:hover {
    transform: scale(1.05);

    img:not(:first-of-type) {
      opacity: 1;
    }
  }
`;

const LogoContainer = styled.div`
  img {
    height: 5vw;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
`;