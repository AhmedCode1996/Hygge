/* eslint-disable react/prop-types */
import { styled } from "styled-components";
const MaxWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MaxWrapper;

const Wrapper = styled.div`
  max-width: calc(1440px - 1rem);
  margin-inline: auto;
  padding-inline: 1rem;
`;
