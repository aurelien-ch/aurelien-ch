import styled from "styled-components";

interface Props {
  src: string;
}

const SkillIcon = (p: Props) => {
  return (
    <Container>
      <FilteredIcon src={p.src} />
      <Icon src={p.src} />
    </Container>
  );
};

export default SkillIcon;

const Container = styled.div`
  height: 1.8vw;
  position: relative;
`;

const FilteredIcon = styled.img`
  height: 100%;
  filter: brightness(0) saturate(100%) invert(51%) sepia(9%) saturate(2442%) hue-rotate(227deg) brightness(88%) contrast(82%);
`;

const Icon = styled.img`
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
  transition: .4s;
`;