import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

import { Project as ProjectType } from "../types";

const Projects = () => {
  const projectsRefs = useRef<HTMLDivElement[]>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects: ProjectType[] = [
    {
      name: "a",
    },
    {
      name: "b",
    },
    {
      name: "c",
    },
    {
      name: "d",
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
      {
        projects.map((p: ProjectType, index: number) => (
          <Project
            key={index}
            ref={(e: any) => projectsRefs.current[index] = e}
            onClick={() => {
              expand(index);
              setActiveIndex(activeIndex === index ? null : index);
            }}
          />
        ))
      }
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  gap: 3vw;
`;

const Project = styled.div<any>`
  height: 15vw;
  flex: 1;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 2.5vw;
  cursor: pointer;
`;