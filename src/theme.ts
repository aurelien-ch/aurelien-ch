import styled from "styled-components";

export const theme = {
  gradients: {
    backgroundGradient: `
    linear-gradient(
      135deg,
      rgba(24, 65, 134, 1) 0%,
      rgba(48, 31, 96, 1) 33%,
      rgba(24, 48, 65, 1) 66%,
      rgba(12, 70, 82, 1) 100%
    );
  `,
    textGradient: "linear-gradient(135deg, #559be6 0%, #9c388e 100%)",
    cardGradient: "linear-gradient(135deg, #9c388e 0%, #559be6 100%)",
  },
};

export const GradientText = styled.div`
  width: fit-content;
  background: ${p => p.theme.gradients.textGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`