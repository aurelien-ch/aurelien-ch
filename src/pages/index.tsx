import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "@/sections/hero";
import AboutMe from "@/sections/about-me";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Content>
        <AboutMe />
        <Skills />
      </Content>
      <Projects />
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
  padding-bottom: 20rem;
`;

const Content = styled.div`
  display: flex;
  gap: 5rem;
  padding: 8rem;
`;
