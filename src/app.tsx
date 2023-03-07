import { useRef } from "react";
import styled from "styled-components";

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
      <ScrollContainer ref={scrollContainerRef}>
        {
          sections.map((section: JSX.Element, index: number) => (
            <ScrollSection key={index}>
              {section}
            </ScrollSection>
          ))
        }
      </ScrollContainer>
      <Platforms />
    </>
  )
};

export default App;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  scroll-snap-type: y mandatory;
  background: ${p => p.theme.gradients.backgroundGradient};
  padding: 0 9vw;
`;

const ScrollSection = styled.section`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  height: 100vh;
`;