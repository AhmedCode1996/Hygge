import { styled } from "styled-components";
import { TYPOGRAPHY } from "../../constants";

export const BaseListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-transform: capitalize;
  font-size: ${TYPOGRAPHY.xl};
`;
