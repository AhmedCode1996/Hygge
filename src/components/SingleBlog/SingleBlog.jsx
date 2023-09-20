/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { TYPOGRAPHY } from "../../constants";

const SingleBlog = ({ image, title, category, label }) => {
  const categoryColors = {
    "--bgColor": "",
    "--color": "",
  };
  if (category === "top tips") {
    categoryColors["--bgColor"] = "#FFF9EA";
    categoryColors["--color"] = "#FFC123";
  } else if (category === "new in") {
    categoryColors["--bgColor"] = "#EAF2FF";
    categoryColors["--color"] = "#2975FF";
  } else if (category === "how to" || category === "sun care") {
    categoryColors["--bgColor"] = "#E6faf5";
    categoryColors["--color"] = "#00CC96";
  } else if (category === "masks" || category === "bestsellers") {
    categoryColors["--bgColor"] = "#FFF0F6";
    categoryColors["--color"] = "#FF66A0";
  }

  return (
    <Wrapper style={categoryColors}>
      <ProductBody>
        <img src={image} alt={title} />
        {label && <span>{label}</span>}
        <Link className="product-link" to="/">
          read article
        </Link>
      </ProductBody>
      <ProductTitle>{title}</ProductTitle>
      <ProductCategory>{category}</ProductCategory>
    </Wrapper>
  );
};

export default SingleBlog;

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
  padding-inline: 1rem;
  color: var(--text-dark100-color);
  font-size: ${TYPOGRAPHY.base};
  font-weight: 600;
  text-transform: capitalize;
  align-items: center;
`;
const ProductCategory = styled.p`
  background-color: var(--bgColor);
  color: var(--color);
  width: fit-content;
  padding: 8px 16px;
  margin-left: 16px;
  border-radius: 24px;
  font-size: ${TYPOGRAPHY.sm};
  font-weight: 600;
`;
