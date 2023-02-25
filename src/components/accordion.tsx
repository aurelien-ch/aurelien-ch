import { useState } from "react";
import styled from "styled-components";
import AnimateHeight from "react-animate-height";
import HTMLReactParser from "html-react-parser";

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
    <Container>
      <Title>
        {p.title}
      </Title>
      <Items>
        {
          p.data.map((exp: IExperience, index: number) => {
            const active = activeIndex === index;

            return (
              <Item
                key={index}
                onClick={() => setActiveIndex(active ? null : index)}
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
                  <ItemDescription>
                    {HTMLReactParser(exp.description)}
                  </ItemDescription>
                </AnimateHeight>
              </Item>
            );
          })
        }
      </Items>
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  /* flex: 1; */
  /* height: 100%; */
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2vw;
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 3vw;
  margin-top: 5vw;
  margin-bottom: 1.8vw;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, .1);
  padding: 2vw 2.5vw;
  border-radius: 1vw;
  cursor: pointer;
  transition: .4s;

  &:hover {
    background-color: rgba(255, 255, 255, .2);
  }
`;

const ItemHeader = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* opacity: .8; */
  
  svg {
    height: 2vw;
    width: 2vw;
    transform: rotate(${p => p.active ? -180 : 0}deg);
    transition: .4s;
  }
`;

const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5vw;
`;

const ItemTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.3vw;
`;

const ItemDetails = styled.div`
  color: rgba(255, 255, 255, .4);
  font-weight: 500;
  font-size: 1vw;
`;

const ItemDescription = styled.div`
  color: rgba(255, 255, 255, .6);
  font-weight: 500;
  font-size: 1vw;
  max-height: 36vh;
  overflow-y: scroll;
  margin-top: 1.6vw;
  /* padding-right: .8vw; */
  /* padding-bottom: 5vw; */
  /* mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%); */
  
  b {
    color: white;
    font-weight: 600;
  }
`;