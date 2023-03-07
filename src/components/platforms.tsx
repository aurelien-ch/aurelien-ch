import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

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
            <PlatformContainer key={index}>
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
            </PlatformContainer>
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
  top: 1.5vw;
  right: 1.5vw;
  display: flex;
`;

const PlatformContainer = styled.div`
  display: flex;
`;

const Chip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.2vw;
  width: 2.2vw;
  border-radius: 100%;
  background-color: rgb(125, 88, 161, .9);
  font-size: .8vw;
  cursor: pointer;
  transition: .4s;

  &:hover {
    transform: scale(1.15);
  }
`;

const Logo = styled.img`
  height: 50%;
  opacity: .8;
`;

const JoinLine = styled.div`
  width: 2.2vw;
  height: .1vw;
  background-color: rgba(125, 88, 161);
  transform: translateY(calc(2.2vw / 2 - 50%));
`;