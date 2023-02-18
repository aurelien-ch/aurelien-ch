import { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  delay?: number;
  speed?: number;
}

const TypeWriter = ({ text, delay = 0, speed = 50 }: Props) => {
  const [typedText, setTypedText] = useState<string>(text[0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;

      const interval = setInterval(() => {
        i++;
        setTypedText((prev) => prev + text[i]);

        if (i === text.length - 1) {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  return (
    <Text started={typedText.length > 1}>
      {typedText}
    </Text>
  );
};

export default TypeWriter;

const Text = styled.span<any>`
  font-family: CourierPrime;
  visibility: ${p => p.started ? "visible" : "hidden"};
`;