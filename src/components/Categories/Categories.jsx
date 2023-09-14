/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
const Categories = ({ loading, data, renderCategory }) => {
  const renderData = data?.map((category, index) =>
    renderCategory(category, index)
  );

  return <Wrapper>{renderData}</Wrapper>;
};

export default Categories;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${128 / 16}rem, 100%), 3rem)
  );
  gap: 16px;
`;
