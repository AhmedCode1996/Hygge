import { styled } from "styled-components";
import { BLOGS } from "../../data/data";

import { MaxWrapper, SingleBlog } from "./../../components";
const BlogsSection = () => {
  return (
    <MaxWrapper>
      <Wrapper>
        {BLOGS.map((blog) => (
          <SingleBlog key={blog.id} {...blog} />
        ))}
      </Wrapper>
    </MaxWrapper>
  );
};

export default BlogsSection;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 8px;

  & > :first-child {
    grid-column: 1 / 3;
  }
`;
