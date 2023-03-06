import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import HTMLReactParser from "html-react-parser";

import { IReview } from "../types";

import { ReactComponent as StarIcon } from "../assets/icons/star.svg";
import { ReactComponent as PrevIcon } from "../assets/icons/prev.svg";
import { ReactComponent as NextIcon } from "../assets/icons/next.svg";

interface Props {
  data: IReview;
}

const Review = (p: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [reviewIndex, setReviewIndex] = useState<number>(0);

  return (
    <Container>
      <Padding>
        <Header>
          <NameContainer>
            <Name>{p.data.name}</Name>
            <Company>— {p.data.company}</Company>
          </NameContainer>
          <StarsContainer>
            {
              Array.from({ length: p.data.stars }, (_, i) => i).map((index: number) => (
                <StarIcon key={index} />
              ))
            }
          </StarsContainer>
        </Header>
        <Content
          ref={contentRef}
          key={reviewIndex}
        >
          {HTMLReactParser(p.data.reviews[reviewIndex] ?? "a")}
        </Content>
        {
          p.data.reviews.length > 1 ? (
            <Pagination>
              <PrevButton
                disabled={reviewIndex <= 0}
                onClick={() => {
                  if (reviewIndex > 0 && contentRef.current) {
                    setReviewIndex(reviewIndex - 1);
                    contentRef.current.scrollTo(0, 0);
                  }
                }}
              >
                <PrevIcon />
              </PrevButton>
              <PaginationIndex>
                {reviewIndex + 1} / {p.data.reviews.length}
              </PaginationIndex>
              <NextButton
                disabled={reviewIndex >= p.data.reviews.length - 1}
                onClick={() => {
                  if (reviewIndex < p.data.reviews.length - 1 && contentRef.current) {
                    setReviewIndex(reviewIndex + 1)
                    contentRef.current.scrollTo(0, 0);
                  };
                }}
              >
                <NextIcon />
              </NextButton>
            </Pagination>
          ) : null
        }
      </Padding>
    </Container>
  );
};

export default Review;

const ContentFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(1vw);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 1.5vw;
`;

const Padding = styled.div`
  margin: 2vw 2.5vw 1.5vw;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: .1vw solid rgba(255, 255, 255, .2);
  padding-bottom: 1.4vw;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5vw;
`;

const Name = styled.div`
  color: white;
  font-size: 1.3vw;
  font-weight: bold;
`;

const Company = styled.div`
  color: rgba(255, 255, 255, .4);
  font-size: 1.3vw;
  font-weight: 500;
`;

const StarsContainer = styled.div`
  display: flex;

  svg {
    height: 1.8vw;
    width: 1.8vw;
    opacity: .8;
  }
`;

const Content = styled.div`
  height: 100%;
  max-height: 8vw;
  overflow-y: scroll;
  color: rgba(255, 255, 255, .6);
  font-size: 1.05vw;
  font-weight: 500;
  margin-top: 1.4vw;
  padding-right: 1.3vw;
  padding-bottom: 1.3vw;
  mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
  animation:${ContentFade} 1s;

  br {
    display: block;
    content: "";
    margin: .5vw 0;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1vw;

  svg {
    height: 1.2vw;
    width: 1.2vw;
  }
`;

const PaginationButton = styled.div<{ disabled: boolean }>`
  background-color: rgba(255, 255, 255, .1);
  border-radius: .5vw;
  opacity: ${p => p.disabled ? .4 : 1};
  padding: .5vw .6vw;
  transition: .4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }
`;

const PrevButton = styled(PaginationButton)`
  svg {
    transform: translate(-.05vw, .1vw);
  }
`;

const NextButton = styled(PaginationButton)`
  svg {
    transform: translate(.05vw, .1vw);
  }
`;

const PaginationIndex = styled.div`
  color: rgba(255, 255, 255, .6);
  font-size: .9vw;
`;