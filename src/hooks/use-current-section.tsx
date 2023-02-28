import { useState, useCallback, useEffect } from "react";

import { ICurrentSection } from "../types";

const useCurrentSection = (containerRef: React.MutableRefObject<HTMLDivElement | null>) => {
  const [currentSection, setCurrentSection] = useState<ICurrentSection>({ index: 0, scrollPercentage: 0 });

  const handleScroll = useCallback(() => {
    const scrollContainer: HTMLElement | null = containerRef.current;

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

          setCurrentSection({ index: i, scrollPercentage });
          break;
        }
      }
    }
  }, [containerRef]);

  useEffect(handleScroll, [containerRef, handleScroll]);

  useEffect(() => {
    const scrollContainer: HTMLElement | null = containerRef.current;

    scrollContainer?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef, handleScroll]);

  return currentSection;
};

export default useCurrentSection;