/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { TYPOGRAPHY } from "../../constants";

const SingleReview = ({ id, image, name, description, slideIndex }) => {
  return (
    <Wrapper id={id} slideIndex={slideIndex}>
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default SingleReview;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  inset: 0;
  transform: translateX(${({ id, slideIndex }) => (id - slideIndex) * 100}%);
  transition: all 0.4s;
`;

const ImageWrapper = styled.div`
  width: ${80 / 16}rem;
  height: ${80 / 16}rem;
  padding: 4px;
  border-radius: 50%;
  border: 1px solid var(--primary-green-color);
`;

const Name = styled.h2`
  font-size: ${TYPOGRAPHY.xl};
  color: var(--text-dark100-color);
`;
const Description = styled.p`
  font-size: ${TYPOGRAPHY.lg};
  color: var(--text-dark100-color);
  line-height: 1.4;
`;
