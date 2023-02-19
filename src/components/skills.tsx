import styled from "styled-components";

import Html from "../assets/skills-icons/html.png"
import Css from "../assets/skills-icons/css.png"
import Js from "../assets/skills-icons/js.png"
import Ts from "../assets/skills-icons/ts.png"
import React from "../assets/skills-icons/react.png"
import Flutter from "../assets/skills-icons/flutter.png"
import Firebase from "../assets/skills-icons/firebase.png"
import Node from "../assets/skills-icons/node.png"
import MongoDB from "../assets/skills-icons/mongodb.png"
import SQL from "../assets/skills-icons/sql.png"
import Git from "../assets/skills-icons/git.png"
import Stripe from "../assets/skills-icons/stripe.png"

const Skills = () => {
  return (
    <Container>
      <Category>
        <CategoryLabel>
          FRONT-END
        </CategoryLabel>
        <Badges>
          <Badge>
            <SkillIcon src={Html} />
            <SkillIcon src={Css} />
            <SkillIcon src={Js} />
            <SkillIcon src={Ts} />
          </Badge>
          <Badge>
            <SkillIcon src={React} />
            <BadgeLabel>
              React
            </BadgeLabel>
          </Badge>
          <Badge>
            <SkillIcon src={Flutter} />
            <BadgeLabel>
              Flutter
            </BadgeLabel>
          </Badge>
        </Badges>
      </Category>
      <Category>
        <CategoryLabel>
          BACK-END
        </CategoryLabel>
        <Badges>
          <Badge>
            <SkillIcon src={Firebase} />
            <BadgeLabel>
              Firebase
            </BadgeLabel>
          </Badge>
          <Badge>
            <SkillIcon src={Node} />
            <BadgeLabel>
              Node
            </BadgeLabel>
          </Badge>
          <Badge>
            <SkillIcon src={MongoDB} />
            <BadgeLabel>
              MongoDB
            </BadgeLabel>
          </Badge>
          <Badge>
            <SkillIcon src={SQL} />
            <BadgeLabel>
              SQL
            </BadgeLabel>
          </Badge>
        </Badges>
      </Category> <Category>
        <CategoryLabel>
          TOOLS
        </CategoryLabel>
        <Badges>
          <Badge>
            <SkillIcon src={Git} />
            <BadgeLabel>
              Git
            </BadgeLabel>
          </Badge>
          <Badge>
            <SkillIcon src={Stripe} />
            <BadgeLabel>
              Stripe
            </BadgeLabel>
          </Badge>
        </Badges>
      </Category>
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
  font-size: 1vw;
  color: rgba(255, 255, 255, .7);
  margin-left: .5vw;
  margin-bottom: .7vw;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
`;

const Badge = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: .6vw;
  background-color: rgba(255, 255, 255, .2);
  padding: .5vw 1vw;
  border-radius: 2vw;
`;

const SkillIcon = styled.img`
  height: 1.8vw;
`;

const BadgeLabel = styled.div`
  font-weight: bold;
  font-size: .8vw;
  color: white;
  margin-right: .2vw
`;