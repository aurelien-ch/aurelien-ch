import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import Review from "./review";

import { IReview } from "../types";
import { GradientText } from "../theme";

import ReviewsData from "../data/reviews";

const Reviews = () => {
  return (
    <Fade
      triggerOnce
      direction={"down"}
    >
      <Title>
        Avis Clients
      </Title>
      <ReviewsContainer>
        {
          ReviewsData.map((r: IReview, index: number) => (
            <Review
              key={index}
              data={r}
            />
          ))
        }
      </ReviewsContainer>
    </Fade>
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
`;