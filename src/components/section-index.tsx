import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

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
  position: absolute;
  top: 1.5vw;
  left: 1.5vw;
  z-index: 1;
`;

const Step = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  height:1.7vw;
  width: 1.7vw;
  border-radius: 100%;
  background-color: ${p => p.active ? "rgb(125, 88, 161)" : "rgb(70, 71, 140)"};
  color: rgba(255, 255, 255, ${p => p.active ? 1 : .4});
  font-size: .8vw;
  transform: scale(${p => p.current ? 1.15 : 1});
  cursor: pointer;
  transition: .4s;

  &:hover {
    transform: scale(1.15);
  }

  span {
    font-family: CourierPrime;
    transform: translateY(.08vw);
  }
`;

const TrackLine = styled.div`
  height: 1.7vw;
  width: .1vw;
  background-color: rgba(125, 88, 161, .3);
  transform: translateX(calc(1.7vw / 2 - 50%));
`;

const ProgressLine = styled.div<any>`
  position: absolute;
  height: ${p => p.filled ? 100 : p.progressing ? p.progress : 0}%;
  width: .1vw;
  background-color: rgb(125, 88, 161);
`;
