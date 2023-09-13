import { styled } from "styled-components";
import { Header } from "../components";
const Home = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding-block: ${16 / 16}rem;
  padding-inline: ${24 / 16}rem;
`;
