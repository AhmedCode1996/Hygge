import { styled } from "styled-components";
import MaxWrapper from "../MaxWrapper";
import HeadingSection from "./../HeadingSection/HeadingSection";
import { Button } from "./../../components";
import { ICONS } from "../../assets";
import { DATA } from "../../data/data";

const HeroSection = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        <Content>
          <HeadingSection
            title={`- ${DATA[0].title}`}
            description={DATA[0].description}
          >
            <Button>shop now</Button>
          </HeadingSection>
          <HeroImage src={ICONS.HeroImage} />
        </Content>
      </MaxWrapper>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  background-color: var(--accent-gray-color);
  border-radius: var(--border-radius);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding-inline: 2rem;
`;

const HeroImage = styled.img`
  flex-shrink: 1;
  min-width: ${500 / 16}rem;
`;
