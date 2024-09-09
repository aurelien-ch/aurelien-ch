import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import skills from "@/data/skills";
import { GradientText } from "@/utils/styles";
import { ISkill, ISkillCategory } from "@/types/skills";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Fade triggerOnce direction={"right"}>
      <Container>
        <Fade triggerOnce direction={"left"}>
          <Title>{t("skills.title")}</Title>
        </Fade>
        {skills.map((category: ISkillCategory, index: number) => (
          <Category key={index}>
            <CategoryLabel>{t(category.nameKey)}</CategoryLabel>
            <Badges>
              <Fade triggerOnce cascade damping={0.1} delay={index * 400} direction={"right"}>
                {category.skills.map((skill: ISkill, index: number) => (
                  <Badge key={index}>
                    <Icon src={skill.icon} alt={skill.name} />
                    <BadgeLabel>{skill.name}</BadgeLabel>
                  </Badge>
                ))}
              </Fade>
            </Badges>
          </Category>
        ))}
      </Container>
    </Fade>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.6rem;
  padding: 8rem;
  padding-top: 0;
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
  font-size: 1.2rem;
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
`;

const Icon = styled.img`
  width: auto;
  height: 2.2rem;
`;

const BadgeLabel = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;
