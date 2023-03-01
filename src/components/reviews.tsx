import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import Review from "./review";

import { IReview } from "../types";
import { GradientText } from "../theme";

import ReviewsData from "../data/reviews";

const Reviews = () => {
  return (
    <div>
      <Fade
        triggerOnce
        direction={"down"}
      >
        <Title>
          Avis Clients
        </Title>
      </Fade>
      <ReviewsContainer>
        <Fade
          triggerOnce
          cascade
          damping={.2}
          direction={"up"}
        >
          {
            ReviewsData.map((r: IReview, index: number) => (
              <Review
                key={index}
                data={r}
              />
            ))
          }
        </Fade>
      </ReviewsContainer>
    </div>
  );
};

export default Reviews;

const Title = styled(GradientText)`
  font-weight: bold;
  font-size: 3vw;
  margin-bottom: 1.8vw;
`;

const ReviewsContainer = styled.div`
  display: flex;
  gap: 2vw;

  > div {
    display: flex;
    flex: 1;
  }
`;