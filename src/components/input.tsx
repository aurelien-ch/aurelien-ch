import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";

import { media } from "@/utils/responsive";
import theme from "@/utils/theme";
import LoadingSpinner from "@/components/loading-spinner";

type Props = {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
} & ({ icon: string; loading?: boolean } | { icon?: undefined; loading?: never });

const CustomInput = forwardRef<HTMLInputElement, Props>(function CustomInput(p, ref) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useImperativeHandle(ref, () => inputRef.current!, []);

  return (
    <Container
      $clickable={!!p.onClick}
      $isFocused={isFocused}
      onClick={() => (p.onClick ? p.onClick() : inputRef.current?.focus())}
      onMouseDown={(e) => p.onClick && e.preventDefault()}
    >
      {p.loading ? (
        <LoadingSpinner size={1.6} />
      ) : p.icon ? (
        <Icon src={p.icon} alt={"Icon"} />
      ) : null}
      <Input
        ref={inputRef}
        placeholder={p.placeholder}
        value={p.value}
        onChange={p.onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
});

export default CustomInput;

const Container = styled.div<{ $clickable?: boolean; $isFocused?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${theme.lightBackground};
  border-radius: 0.8rem;
  border: 0.15rem solid ${(p) => (p.$isFocused ? theme.primary : theme.lightBackground)};
  padding: 0.9rem 1.4rem;
  transition: border 0.3s;
  cursor: text;

  ${(p) =>
    p.$clickable
      ? `
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    ${Input} {
      cursor: pointer;
    }
  `
      : `
    &:focus {
      border: 0.15rem solid ${theme.primary};
    }
  `};

  @media ${media.mobile} {
    padding: 0.5rem 1rem;
  }
`;

const Icon = styled.img`
  height: auto;
  width: 1.6rem;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  font-size: 1.4rem;
`;
