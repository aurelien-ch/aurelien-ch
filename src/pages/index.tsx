import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "@/sections/hero";
import AboutMe from "@/sections/about-me";

const Home = () => {
  return (
    <Container>
      <Hero />
      <AboutMe />
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
