import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

import { EMAIL } from "@/utils/globals";
import RadialTitle from "@/components/radial-title";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (!copied) {
      setCopied(true);
      navigator.clipboard.writeText(EMAIL);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <Container>
      <RadialTitle title={t("contact.title")} />
      <ContentContainer>
        <ProfileImage src={"/images/profile-photo.webp"} alt={"Profile picture"} />
        <Content>
          <Label>{t("contact.label")}</Label>
          <EmailContainer>
            <ContactLabel>{t("contact.contactLabel")}</ContactLabel>
            <Email $copied={copied} onClick={handleCopy}>
              {EMAIL}
              <CopyIcon
                key={`${copied}`}
                $copied={copied}
                src={`/icons/${copied ? "done" : "copy"}.svg`}
                alt={"Copy"}
              />
            </Email>
          </EmailContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 4rem 5rem;
  box-shadow: 2rem 2rem 5rem rgba(0, 0, 0, 0.1);
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-left: 0.1rem solid rgba(255, 255, 255, 0.2);
`;

const ProfileImage = styled.img`
  display: block;
  height: 10rem;
  aspect-ratio: 1;
  border-radius: 50rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Label = styled.div`
  display: flex;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 3rem;
  font-weight: 700;
`;

const Email = styled.div<{ $copied: boolean }>`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  padding: 0.4rem 1rem 0.6rem;
  cursor: pointer;
  transition: opacity 0.3s;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2.2rem;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }

  ${(p) => p.$copied && `pointer-events: none;`}
`;

const FadeInCopy = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
`;

const CopyIcon = styled.img<{ $copied: boolean }>`
  height: auto;
  width: 2.2rem;
  opacity: 0.7;
  transition: opacity 0.3s;
  animation: ${FadeInCopy} 0.5s;
  transform: translateY(${(p) => (p.$copied ? "0.15rem" : "0.1rem")});
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ContactLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  font-weight: 500;
`;
