import { useState } from "react";
import styled, { css } from "styled-components";
import { Fade } from "react-awesome-reveal";
import AnimateHeight from "react-animate-height";
import HTMLReactParser from "html-react-parser";

import { resp } from "../utils/responsive";
import { GradientText } from "../theme";
import { IExperience } from "../types";

import { ReactComponent as ExpandIcon } from "../assets/icons/expand.svg";

interface Props {
  title: string;
  data: IExperience[];
}

const Accordion = (p: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div>
      <Fade
        triggerOnce
        direction={"down"}
      >
        <Title>
          {p.title}
        </Title>
      </Fade>
      <Items>
        <Fade
          triggerOnce
          cascade
          damping={.2}
          direction={"up"}
        >
          {
            p.data.map((exp: IExperience, index: number) => {
              const active = activeIndex === index;

              return (
                <Item
                  key={index}
                  onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                    if (!(e.target as HTMLLinkElement).href) {
                      setActiveIndex(active ? null : index);
                    }
                  }}
                >
                  <ItemHeader active={active}>
                    <ItemTitleContainer>
                      <ItemTitle>
                        {exp.title}
                      </ItemTitle>
                      <ItemDetails>
                        — {exp.details}
                      </ItemDetails>
                    </ItemTitleContainer>
                    <ExpandIcon />
                  </ItemHeader>
                  <AnimateHeight height={active ? "auto" : 0}>
                    <ItemDescription overflow={exp.description.length > 1000}>
                      {HTMLReactParser(exp.description)}
                    </ItemDescription>
                  </AnimateHeight>
                </Item>
              );
            })
          }
        </Fade>
      </Items>
    </div>
  );
};

export default Accordion;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${resp(1.2)};
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: ${resp(3)};
  margin-bottom: ${resp(1.8)};
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, .07);
  padding: ${resp(2)} ${resp(2.5)};
  border-radius: ${resp(1)};
  cursor: pointer;
  transition: .4s;

  &:hover {
    background-color: rgba(255, 255, 255, .12);
  }
`;

const ItemHeader = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  svg {
    height: ${resp(2)};
    width: ${resp(2)};
    transform: rotate(${p => p.active ? -180 : 0}deg);
    transition: .4s;
  }
`;

const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${resp(.5)};
`;

const ItemTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: ${resp(1.3)};
`;

const ItemDetails = styled.div`
  color: rgba(255, 255, 255, .4);
  font-weight: 500;
  font-size: ${resp(1)};
`;

const ItemDescription = styled.div<{ overflow: boolean }>`
  max-height: ${resp(18)};
  overflow-y: scroll;
  color: rgba(255, 255, 255, .6);
  font-weight: 500;
  font-size: ${resp(1)};
  margin-top: ${resp(1.6)};
  padding-right: ${resp(1)};

  ${p => p.overflow && css`
    padding-bottom: ${resp(2)};
    mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
  `}
  
  b {
    color: white;
    font-weight: 600;
  }

  span {
    margin-left: ${resp(1.2)};
  }

  a {
    color: rgba(255, 255, 255, .6);
    transition: .4s;
  }

  a:hover {
    color: white;
  }
`;