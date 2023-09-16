/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants";

const HeadingSection = ({ title, description, align = "left", children }) => {
  return (
    <Wrapper align={align}>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </Wrapper>
  );
};

export default HeadingSection;

const Wrapper = styled.div`
  text-transform: capitalize;
  text-align: ${(props) => props.align};
  h3 {
    color: var(--seconday-blue-color);
    font-weight: 600;
    font-style: italic;
    font-size: ${TYPOGRAPHY.base};
  }

  p {
    color: var(--text-dark100-color);
    font-weight: bold;
    font-size: clamp(1.5rem, 1.6vw + 1rem, 3.5rem);
    max-width: ${(props) => (props.align === "center" ? "none" : "75%")};
  }
`;
