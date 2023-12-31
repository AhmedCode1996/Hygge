/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

import { DATA } from "../data/data";
import { getCategories, getProducts } from "../services/apiCall";

import {
  Button,
  Categories,
  Category,
  Header,
  HeroSection,
  Information,
  Product,
  Products,
  ReviewSection,
  HeadingSection,
  NewsLetterSection,
  BlogsSection,
  FooterSection,
} from "../components";
import { ICONS } from "../assets";
import CollapseHeaderList from "./../components/CollapseHeaderList/CollapseHeaderList";
import { useContextProvider } from "../hooks/useContextProvider";

// const a = {
//   i: 1,
//   toString: () => a.i++,
// };
// if (a == 1 && a == 2 && a == 3) {
//   console.log("you achieved this trick👌");
// }
const Home = () => {
  const combinedQuery = useQuery({
    queryKey: ["categories", "products"],
    queryFn: async () => {
      const [categoriesData, productsData] = await Promise.all([
        getCategories(),
        getProducts(),
      ]);
      return {
        categories: categoriesData,
        products: productsData,
      };
    },
  });

  const { isLoading, error, isError, status, data } = combinedQuery;
  const { isCollapse } = useContextProvider();

  return (
    <Wrapper>
      <HeaderAndHero>
        <Header />
        {isCollapse && <CollapseHeaderList />}
        <HeroSection />
      </HeaderAndHero>
      <CategoriesSection>
        <HeadingSection
          title={`- ${DATA[1].title}`}
          description={DATA[1].description}
        />
        <Categories
          loading={isLoading}
          data={data?.categories}
          renderCategory={(category, index) => (
            <Category key={index} category={category} id={index} />
          )}
        />
      </CategoriesSection>
      <ProductsSection>
        <HeadingSection
          title={`- ${DATA[2].title}`}
          description={DATA[2].description}
        />
        <Products
          loading={isLoading}
          data={data?.products}
          renderProduct={(product, index) => (
            <Product
              key={index}
              {...product}
              image_link={ICONS[`product${index}`]}
              id={index}
            />
          )}
        />
        <ButtonWrapper>
          <Button align="center">show more</Button>
        </ButtonWrapper>
      </ProductsSection>
      <InformationSection>
        <HeadingSection
          title={`- ${DATA[3].title}`}
          description={DATA[3].description}
          align="center"
        />
        <Information />
      </InformationSection>
      <ReviewSection />
      <BlogsSection />
      <NewsLetterSection />
      <FooterSection />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding-inline: ${24 / 16}rem;
  overflow: hidden;

  & > * + * {
    margin-top: 3rem;
  }
`;
const HeaderAndHero = styled.div`
  /* height: 100dvh; */
`;
const CategoriesSection = styled.div`
  & > * + * {
    margin-top: 40px;
  }
`;

const ProductsSection = styled.div`
  & > * + * {
    margin-top: 40px;
  }
`;
const InformationSection = styled.div`
  & > * + * {
    margin-top: 40px;
  }
`;
const ButtonWrapper = styled.div`
  width: fit-content;
  margin-inline: auto;
`;
