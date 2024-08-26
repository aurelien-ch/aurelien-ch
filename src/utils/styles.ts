import styled from "styled-components";

import theme from "@/utils/theme";

export const GradientText = styled.div`
  width: fit-content;
  background: ${theme.textGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
