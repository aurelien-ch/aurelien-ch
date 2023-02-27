import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import AnimatedIcon from "./animated-icon";

import { ISkillCategory, INamedSkill, IIconsSkill } from "../types";

import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <Container>
      {
        SkillsData.map((category: ISkillCategory, index: number) => (
          <Category key={index}>
            <CategoryLabel>
              {category.name}
            </CategoryLabel>
            <Badges>
              <Fade
                triggerOnce
                cascade
                damping={.1}
                delay={index * 400}
                direction={"right"}
              >
                {
                  category.skills.map((skill: INamedSkill | IIconsSkill, index: number) => {
                    return (skill as IIconsSkill).icons ? (
                      <Badge key={index}>
                        {
                          (skill as IIconsSkill).icons.map((icon: string, index: number) => (
                            <AnimatedIcon
                              key={index}
                              src={require(`../assets/skills-icons/${icon}`)}
                            />
                          ))
                        }
                      </Badge>
                    ) : (
                      <Badge key={index}>
                        <AnimatedIcon src={require(`../assets/skills-icons/${(skill as INamedSkill).icon}`)} />
                        <BadgeLabel>
                          {(skill as INamedSkill).name}
                        </BadgeLabel>
                      </Badge>
                    )
                  })
                }
              </Fade>
            </Badges>
          </Category>
        ))
      }
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  flex: 1;
`;

const Category = styled.div`
  margin-bottom: 2vw;
`;

const CategoryLabel = styled.div`
  font-weight: bold;
  font-size: .9vw;
  color: rgba(255, 255, 255, .7);
  margin-left: .5vw;
  margin-bottom: .7vw;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .8vw;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: .6vw;
  background-color: rgba(255, 255, 255, .1);
  padding: .5vw 1vw;
  border-radius: 2vw;
  cursor: default;
  transition: .4s;

  img {
    height: 1.8vw;
  }

  &:hover {
    transform: scale(1.05);

    img:not(:first-of-type) {
      opacity: 1;
    }
  }
`;

const BadgeLabel = styled.div`
  font-weight: 600;
  font-size: .9vw;
  color: white;
  margin-right: .2vw
`;