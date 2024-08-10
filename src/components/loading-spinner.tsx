import styled, { keyframes } from "styled-components";

interface Props {
  size: number;
  style?: React.CSSProperties;
}

const LoadingSpinner = (p: Props) => {
  return <Icon src={"/icons/loading.svg"} alt={"Loading"} $size={p.size} style={p.style} />;
};

export default LoadingSpinner;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.img<{ $size?: number }>`
  height: ${(p) => p.$size}rem;
  width: ${(p) => p.$size}rem;
  animation: ${rotate} 2s linear infinite;
`;
