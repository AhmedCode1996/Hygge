/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

const Products = ({ loading, data, renderProduct }) => {
  const renderData = data?.map((element, index) =>
    renderProduct(element, index)
  );
  return <Wrapper>{renderData?.slice(0, 8)}</Wrapper>;
};

export default Products;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${276 / 16}rem, 100%), 3rem)
  );
  justify-content: center;
  gap: 16px;
`;

/*

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


*/
