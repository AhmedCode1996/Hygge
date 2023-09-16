/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants";

const Product = (props) => {
  const { id, name, price, image_link: image, category } = props;
  const categoryColors = {
    "--bgColor": "",
    "--color": "",
  };
  if (category === "pencil") {
    categoryColors["--bgColor"] = "#FFF9EA";
    categoryColors["--color"] = "#FFC123";
  } else if (category === "lipstick") {
    categoryColors["--bgColor"] = "#EAF2FF";
    categoryColors["--color"] = "#2975FF";
  } else if (category === "liquid") {
    categoryColors["--bgColor"] = "#E6faf5";
    categoryColors["--color"] = "#00CC96";
  }
  return (
    <Wrapper style={categoryColors}>
      <ProductBody>
        <img src={image} alt={name} />
        <span>20%off</span>
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

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  &:hover .product-link {
    display: block;
    opacity: 1;
    visibility: visible;
    transform: translateY(80px);
    transition: all 0.3s;
  }
`;
const ProductBody = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--accent-gray-color);
  border-radius: 32px;
  padding: 1.5rem 1rem;
  position: relative;
  height: 100%;

  img {
    border-radius: inherit;
  }

  span {
    position: absolute;
    right: 0;
    transform: translate(25%, 20%);
    background-color: var(--accent-red-color);
    color: var(--white-color);
    font-weight: 550;
    text-transform: uppercase;
    border-radius: 100px;
    padding: 0.5rem 1rem;
  }

  a {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    background-color: var(--primary-green-color);
    color: var(--white-color);
    font-weight: 600;
    border-radius: 100px;
    padding: 8px 14px;
    transform: translateY(0);
    transition: all 1s;
    margin-block: auto;
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
  background-color: var(--bgColor);
  color: var(--color);
  width: fit-content;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: ${TYPOGRAPHY.sm};
  font-weight: 600;
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
