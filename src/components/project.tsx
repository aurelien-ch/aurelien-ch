import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { resp, devices } from "../utils/responsive";
import { IProject } from "../types";

import AnimatedIcon from "./animated-icon";

import { ReactComponent as OpenIcon } from "../assets/icons/open.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

interface Props {
  index: number;
  eRef: (e: HTMLDivElement) => HTMLDivElement;
  active: boolean;
  data: IProject;
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
                {p.data.name}
              </ProjectName>
              <CloseIcon onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                e.stopPropagation();
                p.setActiveIndex(null);
              }} />
            </MockupHeader>
            <MockupImageContainer onClick={() => p.setZoomedImage(require(`../assets/projects-mockups/${p.data.mockup}`))}>
              <MockupImage src={require(`../assets/projects-mockups/${p.data.mockup}`)} />
              <OpenIcon />
            </MockupImageContainer>
          </MockupContainer>
          <LogoContainer>
            <AnimatedIcon src={require(`../assets/projects-logos/${p.data.logo}`)} />
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
  height: 100%;
  z-index: 1;
  position: absolute;
  width: 90%;
  transform: translateY(${resp(-.2)});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MockupHeader = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  opacity: .6;
  margin-bottom: ${resp(.5)};

  svg {
    height: ${resp(1.3)};
    width: ${resp(1.3)};
    transition: .4s;
    cursor: pointer;

    @media ${devices.mobile} {
      display: none;
    }
  }

  svg:hover {
    transform: scale(1.2);
  }
`;

const ProjectName = styled.div`
  color: white;
  font-size: ${resp(1)};
  font-weight: 500;
`;

const MockupImageContainer = styled.div`
  height: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    height: ${resp(2.5)};
    width:${resp(2.5)};
    padding: ${resp(.5)};
    transition: .4s;

    @media ${devices.mobile} {
      display: none;
    }
  }

  &:hover svg {
    transform: translate(-50%, -50%) scale(1.15);
  }

  @media ${devices.mobile} {
    pointer-events: none;
  }
`;

const MockupImage = styled.img`
  max-width: 100%;
  border-radius: ${resp(1.5)};
  filter: brightness(.5);

  @media ${devices.mobile} {
    filter: none;
  }
`;

const LogoContainer = styled.div`
  img {
    height: ${resp(5)};
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }

  @media ${devices.mobile} {
    display: none;
  }
`;

const ProjectContainer = styled.div<{ showMockup: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${resp(14)};
  background-color: rgba(255, 255, 255, .1);
  border-radius: ${resp(2.5)};
  cursor: ${p => p.showMockup ? "auto" : "pointer"};
  transition: .4s;

  ${MockupContainer} {
    pointer-events: ${p => p.showMockup ? "auto" : "none"};
    opacity: ${p => p.showMockup ? 1 : 0};
    transition: opacity ${p => p.showMockup ? .8 : .2}s ${p => p.showMockup ? .4 : 0}s;

    @media ${devices.mobile} {
      transition: .6s;
    }
  }

  ${LogoContainer} img:not(:first-of-type) {
    opacity: ${p => p.showMockup ? 1 : 0};
  }

  &:hover ${LogoContainer} img:not(:first-of-type) {
    opacity: 1;
  }

  @media ${devices.tablet} {
    height: ${resp(13)};
  }

  @media ${devices.mobile} {
    height: ${resp(17)};
  }
`;