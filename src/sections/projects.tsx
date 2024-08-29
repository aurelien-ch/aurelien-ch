import { useRef, useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";

import projects from "@/data/projects";
import { IProject, ProjectGroup } from "@/types/projects";
import theme from "@/utils/theme";

interface Props {
  scrollY: number;
}

const Projects = (p: Props) => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerOffset, setContainerOffset] = useState<number>(0);
  const projectsRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const groupBoundaries = useMemo<Record<ProjectGroup, { min: number; max: number }>>(
    () => ({
      [ProjectGroup.First]: { min: 0, max: 2 },
      [ProjectGroup.Second]: { min: 3, max: 4 },
      [ProjectGroup.Third]: { min: 5, max: 8 },
    }),
    [],
  );

  const getProjectGroup = (index: number): ProjectGroup => {
    if (
      index >= groupBoundaries[ProjectGroup.First].min &&
      index <= groupBoundaries[ProjectGroup.First].max
    ) {
      return ProjectGroup.First;
    } else if (
      index >= groupBoundaries[ProjectGroup.Second].min &&
      index <= groupBoundaries[ProjectGroup.Second].max
    ) {
      return ProjectGroup.Second;
    } else if (
      index >= groupBoundaries[ProjectGroup.Third].min &&
      index <= groupBoundaries[ProjectGroup.Third].max
    ) {
      return ProjectGroup.Third;
    }

    throw new Error(`Index ${index} is out of bounds`);
  };

  useEffect(() => {
    const _containerOffset = Math.max(
      window.scrollY + window.innerHeight - (containerRef.current?.offsetTop ?? 0),
      0,
    );

    setContainerOffset(_containerOffset);
  }, [p.scrollY]);

  useEffect(() => {
    if (activeIndex !== null) {
      const projectGroup = getProjectGroup(activeIndex);
      const flex =
        projectGroup === ProjectGroup.First ? 2 : projectGroup === ProjectGroup.Second ? 2.5 : 1.75;

      gsap.to(projectsRefs.current, {
        flex: 1,
        duration: 2,
        ease: "elastic(1, .4)",
      });

      gsap.to(projectsRefs.current[activeIndex], {
        flex,
        duration: 2,
        ease: "elastic(1, .3)",
      });
    } else {
      gsap.to(projectsRefs.current, {
        flex: 1,
        duration: 2,
        ease: "elastic(1, .4)",
      });
    }
  }, [activeIndex]);

  const renderProjectGroup = (group: ProjectGroup, style: React.CSSProperties) => {
    const { min, max } = groupBoundaries[group];

    return (
      <Row key={group} style={style}>
        {projects.slice(min, max + 1).map((project: IProject, index: number) => {
          const projectIndex = min + index;

          return (
            <Project
              key={projectIndex}
              ref={(el) => {
                projectsRefs.current[projectIndex] = el;
              }}
              $active={activeIndex === projectIndex}
              onClick={() => setActiveIndex(projectIndex)}
            >
              {activeIndex === projectIndex ? (
                <Mockup src={project.mockup} alt={project.name} />
              ) : (
                <Logo src={project.logo} alt={project.name} />
              )}
            </Project>
          );
        })}
      </Row>
    );
  };

  return (
    <Container
      ref={containerRef}
      $scale={`${Math.min(Math.max(0.96 + (containerOffset - 200) / 4000, 0.96), 1.044)}, ${Math.min(Math.max(0.98 + (containerOffset - 200) / 4000, 0.98), 1.064)}`}
    >
      <Fade triggerOnce direction={"up"}>
        <Title>{t("projects.title")}</Title>
      </Fade>
      <Content>
        {renderProjectGroup(ProjectGroup.First, {
          height: "20rem",
          width: "80%",
          alignSelf: "flex-end",
          marginRight: "5%",
        })}
        {renderProjectGroup(ProjectGroup.Second, { height: "25rem", width: "70%" })}
        {renderProjectGroup(ProjectGroup.Third, {
          height: "17rem",
          width: "90%",
          alignSelf: "flex-end",
        })}
      </Content>
    </Container>
  );
};

export default Projects;

const Container = styled.div<{ $scale: string }>`
  position: relative;
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 8rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.gradient1};
    transform: scale(${(p) => p.$scale});
    border-radius: 2rem;
  }
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  font-size: 5rem;
`;

const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Project = styled.div<{ $active: boolean }>`
  height: 100%;
  aspect-ratio: 1;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: ${(p) => (p.$active ? 1 : 0.7)};
  }
`;

const Mockup = styled.img`
  width: auto;
  max-width: 85%;
  max-height: 85%;
  border-radius: 2rem;
`;

const Logo = styled.img`
  width: auto;
  height: 5rem;
`;
