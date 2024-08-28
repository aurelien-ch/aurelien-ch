import { useRef, useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";

import projects from "@/data/projects";
import { IProject, ProjectGroup } from "@/types/projects";
import { GradientText } from "@/utils/styles";

const Projects = () => {
  const { t } = useTranslation();

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
    projectsRefs.current = projectsRefs.current.slice(0, projects.length);
  }, []);

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
              <Logo src={project.logo} alt={project.name} />
            </Project>
          );
        })}
      </Row>
    );
  };

  return (
    <Container>
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

const Container = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Title = styled(GradientText)`
  font-weight: 700;
  font-size: 5rem;
`;

const Content = styled.div`
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
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  cursor: pointer;
`;

const Logo = styled.img`
  width: auto;
  height: 5rem;
`;
