/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants";

const Product = (props) => {
  const { id, name, price, image_link: image, category } = props;

  return (
    <Wrapper>
      <ProductBody>
        <img src={image} alt={name} />
        <span>20%</span>
        <Link className="product-link" to="/">
          Add To Cart
        </Link>
      </ProductBody>
      <ProductTitle>{name}</ProductTitle>
      <ProductInformation>
        <ProductCategory>{category}</ProductCategory>
        <ProductPrice>
          <span>20$</span>
          <span>{`${price}$`}</span>
        </ProductPrice>
      </ProductInformation>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.article``;
const ProductBody = styled.div`
  background-color: var(--accent-gray-color);
  border-radius: 24px;
  padding: 1rem;
  position: relative;

  img {
    border-radius: inherit;
  }

  span {
    position: absolute;
    top: 10%;
    right: 10%;
  }

  a {
    display: none;
  }
`;
const ProductTitle = styled.h2`
  text-transform: capitalize;
  font-size: ${TYPOGRAPHY.base};
  color: var(--text-dark100-color);
  font-weight: 600;
  align-items: center;
`;
const ProductInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ProductCategory = styled.p`
  border-radius: 24px;
  padding: 8px 16px;
  width: fit-content;
  font-size: ${TYPOGRAPHY.sm};
  font-weight: bold;
`;
const ProductPrice = styled.div`
  font-weight: 600;

  & > * + * {
    margin-left: 4px;
  }

  & > span:first-child {
    color: rgba(26, 32, 44, 0.24);
    font-size: ${TYPOGRAPHY.base};
    text-decoration: line-through;
  }

  & > span:last-child {
    color: var(--text-dark100-color);
    font-size: ${TYPOGRAPHY.lg};
  }
`;
