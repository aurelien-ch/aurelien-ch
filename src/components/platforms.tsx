import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import { resp, devices } from "../utils/responsive";
import { IPlatform } from "../types";

const Platforms = () => {
  const platforms: IPlatform[] = [
    {
      logo: require("../assets/platforms-icons/malt.png"),
      link: "https://www.malt.fr/profile/aureliencharpilienne1/",
    },
    {
      logo: require("../assets/platforms-icons/linkedin.png"),
      link: "https://www.linkedin.com/in/aurelien-charpilienne/",
    },
    {
      logo: require("../assets/platforms-icons/github.png"),
      link: "https://github.com/aurelien-ch/",
    },
  ];

  return (
    <Fade triggerOnce>
      <Container>
        {
          platforms.map((platform: IPlatform, index: number) => (
            <div key={index}>
              <a
                href={platform.link}
                target="_blank"
                rel="noreferrer"
              >
                <Chip>
                  <Logo src={platform.logo} />
                </Chip>
              </a>

              {
                index < platforms.length - 1 ? (
                  <JoinLine />
                ) : null
              }
            </div>
          ))
        }
      </Container>
    </Fade>
  );
};

export default Platforms;

const Container = styled.div`
  z-index: 1;
  position: absolute;
  bottom: ${resp(1.5)};
  right: ${resp(1.5)};

  /* @media ${devices.tablet} {
    top: ${resp(1.5)};
    left: ${resp(1.5)};
  } */
`;

const Chip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${resp(2.2)};
  width: ${resp(2.2)};
  border-radius: 100%;
  background-color: rgb(125, 88, 161);
  font-size: ${resp(.8)};
  cursor: pointer;
  transition: .4s;

  &:hover {
    transform: scale(1.15);
    opacity: 1;
  }
`;

const Logo = styled.img`
  height: 50%;
  opacity: .8;
`;

const JoinLine = styled.div`
  height: ${resp(2.2)};
  width: ${resp(.1)};
  background-color: rgba(125, 88, 161);
  transform: translateX(calc(${resp(2.2)} / 2 - 50%));
`;