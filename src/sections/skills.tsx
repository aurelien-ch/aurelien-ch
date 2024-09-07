import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import skills from "@/data/skills";
import { ISkill, ISkillCategory } from "@/types/skills";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Fade triggerOnce direction={"right"} style={{ flex: 1 }}>
      <Container>
        <Categories>
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
        </Categories>
        <Title>{t("skills.title")}</Title>
      </Container>
    </Fade>
  );
};

export default Skills;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 2rem 3rem 6rem;
`;

const Title = styled.div`
  position: absolute;
  bottom: -1.5rem;
  right: 2rem;
  color: rgba(255, 255, 255, 0.075);
  font-weight: 700;
  font-size: 7rem;
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
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
  background-color: rgba(255, 255, 255, 0.2);
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
