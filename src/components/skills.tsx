import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import AnimatedIcon from "./animated-icon";

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
          <Fade
            triggerOnce
            cascade
            damping={.1}
            direction={"right"}
          >
            <Badge>
              <AnimatedIcon src={Html} />
              <AnimatedIcon src={Css} />
              <AnimatedIcon src={Js} />
              <AnimatedIcon src={Ts} />
            </Badge>
            <Badge>
              <AnimatedIcon src={React} />
              <BadgeLabel>
                React
              </BadgeLabel>
            </Badge>
            <Badge>
              <AnimatedIcon src={Flutter} />
              <BadgeLabel>
                Flutter
              </BadgeLabel>
            </Badge>
          </Fade>
        </Badges>
      </Category>
      <Category>
        <CategoryLabel>
          BACK-END
        </CategoryLabel>
        <Badges>
          <Fade
            triggerOnce
            cascade
            damping={.1}
            delay={300}
            direction={"right"}
          >
            <Badge>
              <AnimatedIcon src={Firebase} />
              <BadgeLabel>
                Firebase
              </BadgeLabel>
            </Badge>
            <Badge>
              <AnimatedIcon src={Node} />
              <BadgeLabel>
                Node
              </BadgeLabel>
            </Badge>
            <Badge>
              <AnimatedIcon src={MongoDB} />
              <BadgeLabel>
                MongoDB
              </BadgeLabel>
            </Badge>
            <Badge>
              <AnimatedIcon src={SQL} />
              <BadgeLabel>
                SQL
              </BadgeLabel>
            </Badge>
          </Fade>
        </Badges>
      </Category> <Category>
        <CategoryLabel>
          TOOLS
        </CategoryLabel>
        <Badges>
          <Fade
            triggerOnce
            cascade
            damping={.1}
            delay={700}
            direction={"right"}
          >
            <Badge>
              <AnimatedIcon src={Git} />
              <BadgeLabel>
                Git
              </BadgeLabel>
            </Badge>
            <Badge>
              <AnimatedIcon src={Stripe} />
              <BadgeLabel>
                Stripe
              </BadgeLabel>
            </Badge>
          </Fade>
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