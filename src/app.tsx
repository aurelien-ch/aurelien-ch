import { useRef } from "react";
import styled from "styled-components";

import { resp, devices } from "./utils/responsive";

import useCurrentSection from "./hooks/use-current-section";
import SectionIndex from "./components/section-index";
import Platforms from "./components/platforms";

import First from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
import Fourth from "./pages/fourth";

import { ICurrentSection } from "./types";

const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentSection: ICurrentSection = useCurrentSection(scrollContainerRef);

  const sections: JSX.Element[] = [
    <First />,
    <Second />,
    <Third />,
    <Fourth />,
  ];

  return (
    <>
      <SectionIndex
        index={currentSection.index}
        steps={sections.length}
        scrollPercentage={currentSection.scrollPercentage}
        containerRef={scrollContainerRef}
      />
      <Platforms />
      <ScrollContainer ref={scrollContainerRef}>
        {
          sections.map((section: JSX.Element, index: number) => (
            <ScrollSection key={index}>
              {section}
            </ScrollSection>
          ))
        }
      </ScrollContainer>
    </>
  )
};

export default App;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  background: ${p => p.theme.gradients.backgroundGradient};
  padding: 0 9vw;

  @media ${devices.tablet} {
    scroll-snap-type: initial;
    height: auto;
    padding: 0 ${resp(5)};
  }

  @media ${devices.mobile} {
    padding: 0 ${resp(1.5)};
  }
`;

const ScrollSection = styled.section`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  height: 100vh;

  @media ${devices.tablet} {
    scroll-snap-align: initial;
    scroll-snap-stop: initial;
    height: auto;

    :first-of-type {
      pointer-events: none;
    }
  }
`;