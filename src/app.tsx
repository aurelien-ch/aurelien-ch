import { useRef } from "react";
import styled from "styled-components";

import useCurrentSection from "./hooks/use-current-section";
import SectionIndex from "./components/section-index";
import Presentation from "./pages/presentation";

const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const currentSection = useCurrentSection(scrollContainerRef);

  const sections: JSX.Element[] = [
    <Presentation />,
    <Presentation />,
    <Presentation />,
    <Presentation />,
    <Presentation />,
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
    </>
  )
};

export default App;

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  background: linear-gradient(
    135deg,
    rgba(24, 65, 134, 1) 0%,
    rgba(48, 31, 96, 1) 33%,
    rgba(24, 48, 65, 1) 66%,
    rgba(12, 70, 82, 1) 100%
  );
`;

const ScrollSection = styled.section`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  height: 100vh;
`;