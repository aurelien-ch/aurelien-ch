import styled from "styled-components";
import { useTranslation } from "react-i18next";

import skills from "@/data/skills";
import { ISkill, ISkillCategory } from "@/types/skills";
import { GradientText } from "@/utils/styles";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("skills.title")}</Title>
      {skills.map((category: ISkillCategory, index: number) => (
        <Category key={index}>
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
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 5rem;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CategoryLabel = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 0.4rem;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background-color: rgba(177, 123, 205, 0.2);
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  cursor: default;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.img`
  height: auto;
  width: 2.4rem;
`;

const BadgeLabel = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;
