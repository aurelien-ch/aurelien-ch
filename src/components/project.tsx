import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import AnimatedIcon from "./animated-icon";

import { ReactComponent as OpenIcon } from "../assets/icons/open.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

interface Props {
  index: number;
  eRef: (e: HTMLDivElement) => HTMLDivElement;
  active: boolean;
  name: string;
  logo: string;
  mockup: string;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setZoomedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const Project = (p: Props) => {
  return (
    <Container
      ref={p.eRef}
      onClick={() => p.setActiveIndex(p.index)}
    >
      <Fade
        triggerOnce
        delay={200 + p.index * 150}
        direction={"up"}
      >
        <ProjectContainer showMockup={p.active}>
          <MockupContainer>
            <MockupHeader>
              <ProjectName>
                {p.name}
              </ProjectName>
              <CloseIcon onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                e.stopPropagation();
                p.setActiveIndex(null);
              }} />
            </MockupHeader>
            <MockupImageContainer onClick={() => p.setZoomedImage(require(`../assets/projects-mockups/${p.mockup}`))}>
              <MockupImage src={require(`../assets/projects-mockups/${p.mockup}`)} />
              <OpenIcon />
            </MockupImageContainer>
          </MockupContainer>
          <LogoContainer>
            <AnimatedIcon src={require(`../assets/projects-logos/${p.logo}`)} />
          </LogoContainer>
        </ProjectContainer>
      </Fade>
    </Container>
  );
};

export default Project;


const Container = styled.div`
  flex: 1;
`;

const MockupContainer = styled.div`
  z-index: 1;
  position: absolute;
  width: 90%;
`;

const MockupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: .6;
  margin: 0 .5vw .3vw;

  svg {
    height: 1.3vw;
    width: 1.3vw;
    transition: .4s;
    cursor: pointer;
  }

  svg:hover {
    transform: scale(1.2);
  }
`;

const ProjectName = styled.div`
  color: white;
  font-size: 1vw;
  font-weight: 500;
`;

const MockupImageContainer = styled.div`
  position: relative;
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

const ProjectContainer = styled.div<{ showMockup: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vw;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 2.5vw;
  cursor: ${p => p.showMockup ? "auto" : "pointer"};
  transition: .4s;

  ${MockupContainer} {
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