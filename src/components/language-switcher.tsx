import { useRouter } from "next/router";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { media } from "@/utils/responsive";

const LanguageSwiter = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const getIconSrc = (currentLang: string) => {
    switch (currentLang) {
      case "en":
        return "/locales/icons/fr.svg";
      case "fr":
        return "/locales/icons/en.svg";
    }
  };

  const changeLanguage = (currentLang: string) => {
    switch (currentLang) {
      case "en":
        router.push("/", "/", { locale: "fr" });
        break;
      case "fr":
        router.push("/", "/", { locale: "en" });
        break;
    }
  };

  return (
    <Container>
      <Icon
        src={getIconSrc(i18n.language)}
        alt={"Locale"}
        onClick={() => changeLanguage(i18n.language)}
      />
    </Container>
  );
};

export default LanguageSwiter;

const Container = styled.div`
  z-index: 9;
  position: fixed;
  bottom: 1.2rem;
  right: 1.2rem;
`;

const Icon = styled.img`
  height: auto;
  width: 3rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;

    @media ${media.mobile} {
      opacity: 1;
    }
  }

  @media ${media.mobile} {
    width: 2.4rem;
  }
`;
