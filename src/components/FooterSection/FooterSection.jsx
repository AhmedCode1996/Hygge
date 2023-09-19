import { styled } from "styled-components";
import { MaxWrapper, SingleFooterElement } from "./../../components";
import { FOOTER } from "../../data/data";
import { ICONS } from "../../assets";
import { TYPOGRAPHY } from "../../constants";

const FooterSection = () => {
  return (
    <MaxWrapper>
      <Wrapper>
        <CopyRights>
          <Logo>
            <img src={ICONS["primary_1"]} />
          </Logo>
          <Title>© 2023 - All Rights Reserved.</Title>
        </CopyRights>
        {FOOTER.map((element) => (
          <SingleFooterElement key={element.id} {...element} />
        ))}
      </Wrapper>
    </MaxWrapper>
  );
};

export default FooterSection;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
`;

const CopyRights = styled.div`
  & > * + * {
    margin-top: 16px;
  }
`;
const Logo = styled.div`
  width: 150px;
  cursor: pointer;
`;
const Title = styled.p`
  font-size: ${TYPOGRAPHY.base};
`;
