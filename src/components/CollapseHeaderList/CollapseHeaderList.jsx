import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import SubCategory from "../SubCategory/SubCategory";
import { BaseListWrapper } from "../BaseListWrapper";

const CollapseHeaderList = () => {
  const [isSubCategory, setIsSubCategory] = useState(false);
  return (
    <Wrapper>
      <MainList>
        <li>
          <Link>home</Link>
        </li>
        <li onClick={() => setIsSubCategory((prev) => !prev)}>
          <Link>categories</Link>
        </li>
        <li>
          <Link>blog</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>contact</Link>
        </li>
      </MainList>
      {isSubCategory && <SubCategory />}
    </Wrapper>
  );
};

export default CollapseHeaderList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 32px;
  position: fixed;
  width: 100%;
  height: 100dvh;
  background-color: var(--white-color);
`;

const MainList = styled(BaseListWrapper)``;
