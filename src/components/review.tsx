import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import HTMLReactParser from "html-react-parser";

import { resp } from "../utils/responsive";

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
          paginated={p.data.reviews.length > 1}
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
    transform: translateY(${resp(1)});
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, .1);
  border-radius: ${resp(1.5)};
`;

const Padding = styled.div`
  height: 100%;
  margin: ${resp(2)} ${resp(2.5)} ${resp(1.5)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${resp(.1)} solid rgba(255, 255, 255, .2);
  padding-bottom: ${resp(1.4)};
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${resp(.5)};
`;

const Name = styled.div`
  color: white;
  font-size: ${resp(1.3)};
  font-weight: bold;
`;

const Company = styled.div`
  color: rgba(255, 255, 255, .4);
  font-size: ${resp(1.3)};
  font-weight: 500;
`;

const StarsContainer = styled.div`
  display: flex;

  svg {
    height: ${resp(1.8)};
    width: ${resp(1.8)};
    opacity: .8;
  }
`;

const Content = styled.div<{ paginated: boolean }>`
  height: 100%;
  max-height: ${p => resp(p.paginated ? 8.2 : 12)};
  overflow-y: scroll;
  color: rgba(255, 255, 255, .6);
  font-size: ${resp(1.05)};
  font-weight: 500;
  margin-top: ${resp(1.4)};
  padding-right: ${resp(1.3)};
  padding-bottom: ${resp(1.3)};
  mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
  animation:${ContentFade} 1s;

  br {
    display: block;
    content: "";
    margin: ${resp(.5)} 0;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${resp(1)};

  svg {
    height: ${resp(1.2)};
    width: ${resp(1.2)};
  }
`;

const PaginationButton = styled.div<{ disabled: boolean }>`
  height: ${resp(2)};
  width: ${resp(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .1);
  border-radius: ${resp(.5)};
  opacity: ${p => p.disabled ? .4 : 1};
  transition: .4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }
`;

const PrevButton = styled(PaginationButton)`
  svg {
    transform: translateX(${resp(-.05)});
  }
`;

const NextButton = styled(PaginationButton)`
  svg {
    transform: translateX(${resp(.05)});
  }
`;

const PaginationIndex = styled.div`
  color: rgba(255, 255, 255, .6);
  font-size: ${resp(.9)};
`;