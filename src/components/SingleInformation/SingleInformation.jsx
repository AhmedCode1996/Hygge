/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { TYPOGRAPHY } from "../../constants";

const SingleInformation = ({ image, title, description }) => {
  return (
    <Wrapper>
      <ImageWraper>
        <img src={image} />
      </ImageWraper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default SingleInformation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-gray-color);
  height: ${64 / 16}rem;
  width: ${64 / 16}rem;
  padding: 1rem;
  border-radius: 50%;
`;
const Title = styled.h3`
  font-size: ${TYPOGRAPHY.xl};
  color: var(--text-dark100-color);
  font-weight: 700;
  text-transform: capitalize;
  `;
const Description = styled.p`
  font-size: ${TYPOGRAPHY.lg};
  color: var(--text-dark100-color);
  text-align: center;
`;
