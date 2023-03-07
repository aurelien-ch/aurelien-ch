import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { resp } from "../utils/responsive";
import { ISkillCategory, INamedSkill, IIconsSkill } from "../types";

import AnimatedIcon from "./animated-icon";

import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <Container>
      {
        SkillsData.map((category: ISkillCategory, index: number) => (
          <Category key={index}>
            <Fade
              triggerOnce
              cascade
              damping={.1}
              delay={index * 400}
              direction={"down"}
            >
              <CategoryLabel>
                {category.name}
              </CategoryLabel>
            </Fade>
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
  margin-bottom: ${resp(2)};
`;

const CategoryLabel = styled.div`
  font-weight: bold;
  font-size: ${resp(.9)};
  color: rgba(255, 255, 255, .7);
  margin-left: ${resp(.5)};
  margin-bottom: ${resp(.7)};
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${resp(.8)};
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: ${resp(.6)};
  background-color: rgba(255, 255, 255, .1);
  padding: ${resp(.5)} ${resp(1)};
  border-radius: ${resp(2)};
  cursor: default;
  transition: .4s;

  img {
    height: ${resp(1.8)};
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
  font-size: ${resp(.9)};
  color: white;
  margin-right: ${resp(.2)};
`;