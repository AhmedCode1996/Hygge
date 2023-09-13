/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import MaxWrapper from "../MaxWrapper";

import { ICONS } from "./../../assets/index";

const Header = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        <HeaderNav>
          <NavItems>
            <Item>
              <Logo src={ICONS.primary_1} />
            </Item>
            <Item>
              <Menu>
                <span></span>
                <span></span>
              </Menu>
            </Item>
            <Item>
              <img src={ICONS.searchIcon} />
              <img src={ICONS.cartIcon} />
              <img src={ICONS.userProfile} />
            </Item>
          </NavItems>
        </HeaderNav>
      </MaxWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header``;
const HeaderNav = styled.nav``;
const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Item = styled.li`
  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    & > * {
      cursor: pointer;
    }
  }
`;
const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0.5rem;
  width: calc(50px);
  height: calc(50px);
  border-radius: 50%;
  background-color: var(--accent-gray-color);
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    background-color: black;
    width: 100%;
    border-radius: 1rem;
  }
`;
