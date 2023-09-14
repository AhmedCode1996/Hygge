import { styled } from "styled-components";
import { Header, HeroSection, Products } from "../components";
const Home = () => {
  return (
    <Wrapper>
      <HeaderAndHero>
        <Header />
        <HeroSection />
      </HeaderAndHero>
      <Products />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding-inline: ${24 / 16}rem;

  & > * + * {
    margin-top: 1rem;
  }
`;
const HeaderAndHero = styled.div`
  height: 100dvh;
`;
