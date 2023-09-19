import { styled } from "styled-components";
import useSliderIndex from "../../hooks/useSliderIndex";

import { DATA, REVIEWS } from "../../data/data";
import { ICONS } from "../../assets";

import {
  HeadingSection,
  SingleReview,
  AnimatedIcon,
  MaxWrapper,
} from "./../../components";

const ReviewSection = () => {
  const { slideIndex, handleNext, handlePrev } = useSliderIndex();

  return (
    <MaxWrapper>
      <Wrapper>
        <HeadingSection
          title={`- ${DATA[4].title}`}
          description={DATA[4].description}
        />
        <Slider>
          <OuterSlider>
            {REVIEWS.map((review, index) => (
              <SingleReview key={index} {...review} slideIndex={slideIndex} />
            ))}
          </OuterSlider>
          <Actions>
            <PrevButton onClick={handlePrev}>
              <AnimatedIcon icon={ICONS.arrow} />
            </PrevButton>
            <NextButton onClick={handleNext}>
              <AnimatedIcon icon={ICONS.arrow} />
            </NextButton>
          </Actions>
        </Slider>
      </Wrapper>
    </MaxWrapper>
  );
};

export default ReviewSection;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 2rem;
  border-radius: 64px;
  background-color: var(--accent-gray-color);
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
`;

const OuterSlider = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: ${280 / 16}rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${48 / 16}rem;
  height: ${48 / 16}rem;
  border-radius: 50%;
  border: 2px solid var(--text-dark40-color);
  cursor: pointer;
`;
const PrevButton = styled(BaseButton)`
  transform: rotate(180deg);
`;
const NextButton = styled(BaseButton)``;
