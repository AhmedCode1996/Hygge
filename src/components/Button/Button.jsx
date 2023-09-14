/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants";

const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  background-color: var(--primary-green-color);
  color: var(--white-color);
  width: fit-content;
  padding: 16px 40px;
  margin-top: 2rem;
  font-weight: bold;
  font-size: ${TYPOGRAPHY.lg};
  text-transform: capitalize;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00cc96e6;
  }
`;
