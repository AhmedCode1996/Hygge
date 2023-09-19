import { styled } from "styled-components";
import { HeadingSection, MaxWrapper, NewsLetterForm } from "./../../components";
import { DATA } from "../../data/data";

const NewsLetterSection = () => {
  return (
    <MaxWrapper>
      <Wrapper>
        <HeadingSection
          title={`- ${DATA[5].title}`}
          description={DATA[5].description}
          align="center"
        />
        <NewsLetterForm />
      </Wrapper>
    </MaxWrapper>
  );
};

export default NewsLetterSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--accent-gray-color);
  padding: 3rem;
  border-radius: 64px;
`;
