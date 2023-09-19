import { styled } from "styled-components";
import { Button } from "./../../components";

const NewsLetterForm = () => {
  return (
    <Wrapper>
      <input type="email" placeholder="your email" />
      <Button>sign up</Button>
    </Wrapper>
  );
};

export default NewsLetterForm;

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 60%;
  margin-inline: auto;
  gap: 16px;

  & > input {
    flex-basis: 60%;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    background-color: var(--white-color);
    color: var(--text-dark100-color);
    border-radius: 32px;

    &::placeholder {
      text-transform: capitalize;
      color: var(--text-dark40-color);
    }
  }
`;
