import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FOOTER } from "../../data/data";

const SubCategory = () => {
  return (
    <Wrapper>
      {FOOTER[0].items?.slice(0, 9).map((item, index) => {
        return (
          <li key={index}>
            <Link>{item}</Link>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default SubCategory;

const Wrapper = styled.ul`
  transform: translateY(8%);
`;
