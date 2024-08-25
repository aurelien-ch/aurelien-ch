import styled from "styled-components";

import theme from "@/utils/theme";

interface Props {
  text: string;
  style: React.CSSProperties;
}

const GradientText = (p: Props) => {
  return <Container style={p.style}>{p.text}</Container>;
};

export default GradientText;

const Container = styled.div`
  width: fit-content;
  background: ${theme.gradientText};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
