import styled from "styled-components";
import { useTranslation } from "react-i18next";

import skills from "@/data/skills";
import { GradientText } from "@/utils/styles";
import { ISkill, ISkillCategory } from "@/types/skills";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("skills.title")}</Title>
      <Content>
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
      </Content>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 8rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.8rem;
`;

const Title = styled(GradientText)`
  font-weight: 800;
  font-size: 5rem;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CategoryLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  font-weight: 500;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.6rem 1rem;
  border-radius: 1.2rem;
  cursor: default;
  box-shadow: 0.4rem 0.4rem 2rem rgba(0, 0, 0, 0.1);
  border-top: 0.05rem solid rgba(255, 255, 255, 0.2);
  border-left: 0.05rem solid rgba(255, 255, 255, 0.2);
`;

const Icon = styled.img`
  width: auto;
  height: 2.2rem;
`;

const BadgeLabel = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;
