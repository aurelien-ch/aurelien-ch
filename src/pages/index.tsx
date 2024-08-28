import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useScroll } from "@/providers/scroll-context";
import Hero from "@/sections/hero";
import AboutMe from "@/sections/about-me";
import Skills from "@/sections/skills";

const Home = () => {
  const scrollY = useScroll();

  return (
    <Container>
      <Hero scrollY={scrollY} />
      <Flex style={{ padding: "8rem" }}>
        <AboutMe />
        <Skills />
      </Flex>
    </Container>
  );
};

export default Home;

export const getStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300vh;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;
