import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { media } from "@/utils/responsive";
import Hero from "@/sections/hero";
import AboutMe from "@/sections/about-me";
import Projects from "@/sections/projects";
import MoreReviews from "@/sections/more-reviews";
import Contact from "@/sections/contact";

const Home = () => {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <Projects />
      <MoreReviews />
      <Contact />
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
  padding-bottom: 16rem;

  @media ${media.mobile} {
    padding-bottom: 12rem;
  }
`;
