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
  column-gap: 32px;
  row-gap: 20px;
`;
