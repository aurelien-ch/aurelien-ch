import styled from "styled-components";
import { useTranslation } from "react-i18next";
import HTMLReactParser from "html-react-parser";

import { media } from "@/utils/responsive";
import { IReview } from "@/types/projects";

interface Props {
  review: IReview;
}

const Review = (p: Props) => {
  const { t } = useTranslation();

  return (
    <Container>
      <NoteContainer>
        <Note>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} src={"/icons/star.svg"} alt={"Star"} />
          ))}
        </Note>
        <Reviewer>
          {p.review.reviewerName} <span>— {p.review.reviewerRole}</span>
        </Reviewer>
      </NoteContainer>
      <Content>
        <StartQuote>“</StartQuote>
        {HTMLReactParser(t(p.review.reviewKey))}
        <EndQuote>”</EndQuote>
      </Content>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`;

const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Note = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StarIcon = styled.img`
  height: auto;
  width: 1.8rem;
`;

const Content = styled.div`
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.6rem;

  span {
    font-size: 10rem;
    opacity: 0.2;
    font-weight: 600;
  }
`;

const StartQuote = styled.span`
  position: absolute;
  top: -3rem;
  left: -3rem;

  @media ${media.mobile} {
    left: -2.6rem;
  }
`;

const EndQuote = styled.span`
  position: absolute;
  bottom: -7rem;
  right: 2rem;

  @media ${media.mobile} {
    right: 1.6rem;
  }
`;

const Reviewer = styled.div`
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  transform: translateY(0.1rem);

  span {
    color: rgba(255, 255, 255, 0.7);
  }
`;
