import styled from "styled-components";
import { useTranslation } from "react-i18next";

import theme from "@/utils/theme";
import skills from "@/data/skills";
import { ISkill, ISkillCategory } from "@/types/skills";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("skills.title")}</Title>
      <Categories>
        {skills.map((category: ISkillCategory, index: number) => (
          <Category key={index} $inverted={index % 2 !== 0}>
            <CategoryLabel>{t(category.nameKey)}</CategoryLabel>
            <Badges>
              {category.skills.map((skill: ISkill, index: number) => (
                <Badge key={index}>
                  <Icon src={skill.icon} alt={skill.name} />
                  <BadgeLabel>{skill.name}</BadgeLabel>
                </Badge>
              ))}
            </Badges>
          </Category>
        ))}
      </Categories>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background: ${theme.gradient2};
  border-radius: 2rem;
  padding: 4rem 10% 6rem;
  margin: 0 4rem;
`;

const Title = styled.div`
  color: white;
  font-weight: 700;
  font-size: 5rem;
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Category = styled.div<{ $inverted: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.$inverted ? "row-reverse" : "row")};
  align-self: ${(p) => (p.$inverted ? "flex-end" : "flex-start")};
  align-items: center;
  gap: 1.6rem;
`;

const CategoryLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 2.6rem;
  font-weight: 600;
  white-space: nowrap;
`;

const Badges = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.6rem;
  border-radius: 2rem;
  cursor: default;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.img`
  width: auto;
  height: 3.8rem;
`;

const BadgeLabel = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;
