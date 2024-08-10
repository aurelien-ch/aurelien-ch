import styled from "styled-components";
import Select, { Props as SelectProps } from "react-select";

import theme from "@/utils/theme";
import { IOption } from "@/types/select";

interface Props extends SelectProps<IOption, false> {
  label?: string;
}

const CustomSelect = (p: Props) => {
  return (
    <Container>
      {p.label ? <Label>{p.label}</Label> : null}
      <Select
        {...p}
        isSearchable={false}
        theme={(defaultTheme) => ({
          ...defaultTheme,
          colors: {
            ...defaultTheme.colors,
            primary: theme.primary,
            borderColor: theme.primary,
          },
        })}
        styles={{
          control: (styles, { isFocused }) => ({
            ...styles,
            width: "fit-content",
            backgroundColor: theme.lightBackground,
            fontSize: "1.3rem",
            border: isFocused ? `.05rem solid ${theme.primary}` : "none",
          }),
          singleValue: (styles) => ({
            ...styles,
            color: "white",
          }),
          option: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: isFocused ? theme.primary : theme.lightBackground,
            transition: "0.3s background-color",
            fontSize: "1.3rem",
          }),
          menu: (styles) => ({
            ...styles,
            width: "max-content",
            backgroundColor: theme.lightBackground,
          }),
          dropdownIndicator: (styles) => ({
            ...styles,
            color: "white",
          }),
          indicatorSeparator: (styles) => ({
            ...styles,
            display: "none",
          }),
        }}
      />
    </Container>
  );
};

export default CustomSelect;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Label = styled.div`
  font-size: 1.4rem;
`;
