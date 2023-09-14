/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { TYPOGRAPHY } from "../../constants";
import { ICONS } from "../../assets";

const Category = ({ category, id }) => {
  return (
    <Wrapper>
      <img src={ICONS[`category${Number(id) + 1}`]} />
      <h2>{category.replace("_", " ")}</h2>
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 1rem;
  background-color: var(--accent-gray-color);
  border-radius: 24px;
  cursor: pointer;

  h2 {
    text-transform: capitalize;
    font-size: ${TYPOGRAPHY.base};
    color: var(--text-dark100-color);
    font-weight: 600;
    align-items: center;
  }
`;
