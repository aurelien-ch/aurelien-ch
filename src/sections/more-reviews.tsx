import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import HTMLReactParser from "html-react-parser";

import moreReviews from "@/data/more-reviews";
import { media } from "@/utils/responsive";
import { GradientText } from "@/utils/styles";
import { IReview } from "@/types/projects";
import RadialTitle from "@/components/radial-title";
import Review from "@/components/review";

const MoreReviews = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <RadialTitle title={t("moreReviews.title")} />
      <Reviews>
        <Fade triggerOnce cascade damping={0.2} direction={"up"} style={{ flex: 1 }}>
          {moreReviews.map((review: IReview, index: number) => (
            <ReviewContainer key={index}>
              <ProjectName>{review.projectName}</ProjectName>
              <ProjectDescription>
                {HTMLReactParser(t(review.projectDescriptionKey))}
              </ProjectDescription>
              <Review review={review} />
            </ReviewContainer>
          ))}
        </Fade>
      </Reviews>
    </Container>
  );
};

export default MoreReviews;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 0 8rem 8rem;

  @media ${media.mobile} {
    gap: 4rem;
    padding: 8rem 3rem;
  }
`;

const Reviews = styled.div`
  display: flex;
  gap: 6rem;

  @media ${media.mobile} {
    flex-direction: column;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const ProjectName = styled(GradientText)`
  font-size: 4rem;
  font-weight: 800;

  @media ${media.mobile} {
    font-size: 3rem;
  }
`;

const ProjectDescription = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.4rem;
`;
