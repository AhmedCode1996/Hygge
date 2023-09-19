/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { TYPOGRAPHY } from "../../constants";

const SingleFooterElement = ({ title, items }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item.replace("_", " ")}</li>;
        })}
      </ul>
    </Wrapper>
  );
};

export default SingleFooterElement;

const Wrapper = styled.div`
  color: var(--text-dark100-color);
  text-transform: capitalize;

  ul > *:not(:first-child) {
    margin-top: 0.5rem;
  }

  ul > li {
    font-size: ${TYPOGRAPHY.base};
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;
