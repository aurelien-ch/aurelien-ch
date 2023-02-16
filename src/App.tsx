import styled from "styled-components";

import First from "./pages/first";

const App = () => {
  return (
    <ScrollContainer>
      <ScrollSection>
        <First />
      </ScrollSection>
      <ScrollSection>
        B
      </ScrollSection>
      <ScrollSection>
        C
      </ScrollSection>
    </ScrollContainer>
  )
};

export default App;

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  background: #1c1c1c;
  background: linear-gradient(135deg, rgba(24, 65, 134, 1) 0%, rgba(48, 31, 96, 1) 33%, rgba(24, 48, 65, 1) 66%, rgba(12, 70, 82, 1) 100%);
`;

const ScrollSection = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  height: 100vh;
`;