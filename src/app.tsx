import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import SectionIndex from "./components/section-index";
import First from "./pages/first";

const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [currentSectionScrollPercentage, setCurrentSectionScrollPercentage] = useState<number>(0);

  const sections: JSX.Element[] = [<First />, <First />, <First />, <First />, <First />];

  useEffect(() => {
    const scrollContainer: HTMLElement | null = scrollContainerRef.current;

    const handleScroll = () => {
      const scrollContainer: HTMLElement | null = scrollContainerRef.current;

      if (scrollContainer) {
        const sections = document.querySelectorAll("section");
        const scrollPosition = scrollContainer.scrollTop;

        for (let i = 0; i < sections.length; i++) {
          const sectionTop = sections[i].offsetTop;
          const sectionBottom = sectionTop + sections[i].offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionHeight = sectionBottom - sectionTop;
            const distanceFromTop = scrollPosition - sectionTop;
            const scrollPercentage = (distanceFromTop / sectionHeight) * 100;

            setCurrentSection(i);
            setCurrentSectionScrollPercentage(scrollPercentage);
            break;
          }
        }
      }
    };

    scrollContainer?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SectionIndex
        index={currentSection}
        steps={sections.length}
        stepScrollPercentage={currentSectionScrollPercentage}
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