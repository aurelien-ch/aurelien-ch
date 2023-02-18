import styled from "styled-components";

interface Props {
  index: number;
  steps: number;
  stepScrollPercentage: number;
}

const SectionIndex = (p: Props) => {
  return (
    <Container>
      {
        Array.from({ length: p.steps }, (_, i) => i).map((step: number) => (
          <div key={step}>
            <Step
              active={step <= p.index}
              current={step === p.index}
            >
              {step + 1}
            </Step>

            {
              step < p.steps - 1 ? (
                <TrackLine>
                  <ProgressLine
                    filled={step < p.index}
                    progressing={step === p.index}
                    progress={p.stepScrollPercentage}
                  />
                </TrackLine>
              ) : null
            }
          </div>
        ))
      }
    </Container>
  );
};

export default SectionIndex;

const Container = styled.div`
  position: absolute;
  top: 1.5vw;
  left: 1.5vw;
`;

const Step = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2vw;
  width: 2vw;
  border-radius: 100%;
  background-color: #704b93;
  opacity: ${p => p.active ? 1 : .4};
  transform: scale(${p => p.current ? 1.15 : 1});
  transition: .3s;
  color: white;
  font-size: 0.8vw;
`;

const TrackLine = styled.div`
  height: 2vw;
  width: 0.15vw;
  background-color: rgba(112, 75, 147, .3);
  transform: translateX(calc(2vw / 2 - 50%));
`;

const ProgressLine = styled.div<any>`
  position: absolute;
  height: ${p => p.filled ? 100 : p.progressing ? p.progress : 0}%;
  width: 0.15vw;
  background-color: #704b93;
`;
