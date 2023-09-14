/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

import { DATA } from "../data/data";
import { getCategories } from "../services/apiCall";

import {
  Categories,
  Category,
  Header,
  HeroSection,
  Products,
} from "../components";
import HeadingSection from "../components/HeadingSection/HeadingSection";

const Home = () => {
  const { isLoading, error, isError, status, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <Wrapper>
      <HeaderAndHero>
        <Header />
        <HeroSection />
      </HeaderAndHero>
      <CategoriesSection>
        <HeadingSection
          title={`- ${DATA[1].title}`}
          description={DATA[1].description}
        />
        <Categories
          loading={isLoading}
          data={data}
          renderCategory={(category, index) => (
            <Category key={index} category={category} id={index} />
          )}
        />
      </CategoriesSection>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding-inline: ${24 / 16}rem;
  overflow: hidden;

  & > * + * {
    margin-top: 1rem;
  }
`;
const HeaderAndHero = styled.div`
  height: 100dvh;
`;
const CategoriesSection = styled.div`

  & > * + * {
    margin-top: 40px;
  }
`;
