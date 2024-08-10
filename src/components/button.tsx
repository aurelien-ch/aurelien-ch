import styled from "styled-components";

import { media } from "@/utils/responsive";
import theme from "@/utils/theme";

type Props = {
  onClick?: () => void;
  small?: boolean;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  loading?: boolean;
  disabled?: boolean;
} & ({ title: string; icon?: string } | { title?: string; icon: string });

const Button = (p: Props) => {
  return (
    <Container
      $small={p.small}
      $disabled={p.disabled || p.loading}
      onClick={p.onClick}
      style={p.style}
    >
      {p.icon ? <Icon src={p.icon} alt={p.title} style={p.iconStyle} /> : null}
      {p.title ? <Title style={p.textStyle}>{p.loading ? "Loading..." : p.title}</Title> : null}
    </Container>
  );
};

export default Button;

const Container = styled.div<{
  $small?: boolean;
  $disabled?: boolean;
}>`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  background-color: ${theme.primary};
  border-radius: 0.8rem;
  padding: ${(p) => (p.$small ? "1rem 1.2rem" : "1.4rem 2.6rem")};
  cursor: pointer;
  transition: opacity 0.3s;

  ${(p) =>
    p.$disabled &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}

  &:hover {
    opacity: 0.7;
  }

  @media ${media.mobile} {
    padding: ${(p) => (p.$small ? "0.8rem 1rem" : "1rem 1.6rem")};
  }
`;

const Icon = styled.img`
  height: auto;
  width: 1.6rem;
`;

const Title = styled.div`
  white-space: nowrap;
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 100%;
`;
