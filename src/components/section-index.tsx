import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { resp, devices } from "../utils/responsive";

interface Props {
  index: number;
  steps: number;
  scrollPercentage: number;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const SectionIndex = (p: Props) => {
  return (
    <Fade triggerOnce>
      <Container>
        {
          Array.from({ length: p.steps }, (_, i) => i).map((step: number) => (
            <div key={step}>
              <Step
                active={step <= p.index}
                current={step === p.index}
                onClick={() => {
                  p.containerRef.current?.scrollTo({
                    top: window.innerHeight * (step),
                    behavior: "smooth",
                  });
                }}
              >
                <span>{step + 1}</span>
              </Step>

              {
                step < p.steps - 1 ? (
                  <TrackLine>
                    <ProgressLine
                      filled={step < p.index}
                      progressing={step === p.index}
                      progress={p.scrollPercentage}
                    />
                  </TrackLine>
                ) : null
              }
            </div>
          ))
        }
      </Container>
    </Fade>
  );
};

export default SectionIndex;

const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: ${resp(1.5)};
  left: ${resp(1.5)};

  @media ${devices.tablet} {
    display: none;
  }
`;

const Step = styled.div<{ active: boolean, current: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${resp(1.7)};
  width: ${resp(1.7)};
  border-radius: 100%;
  background-color: ${p => p.active ? "rgb(125, 88, 161)" : "rgb(70, 71, 140)"};
  color: rgba(255, 255, 255, ${p => p.active ? 1 : .4});
  font-size: ${resp(.8)};
  transform: scale(${p => p.current ? 1.15 : 1});
  cursor: pointer;
  transition: .4s;

  &:hover {
    transform: scale(1.15);
  }

  span {
    font-family: CourierPrime;
    transform: translateY(${resp(.08)});
  }
`;

const TrackLine = styled.div`
  height: ${resp(1.7)};
  width: ${resp(.1)};
  background-color: rgba(125, 88, 161, .3);
  transform: translateX(calc(${resp(1.7)} / 2 - 50%));
`;

const ProgressLine = styled.div<{ filled: boolean, progressing: boolean, progress: number }>`
  position: absolute;
  height: ${p => p.filled ? 100 : p.progressing ? p.progress : 0}%;
  width: ${resp(.1)};
  background-color: rgb(125, 88, 161);
`;