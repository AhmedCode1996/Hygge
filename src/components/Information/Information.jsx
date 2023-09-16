import { styled } from "styled-components";
import { INFORMATION } from "../../data/data";
import SingleInformation from "../SingleInformation";

const Information = () => {
  const renderData = INFORMATION.map((element) => (
    <SingleInformation key={element.id} {...element} />
  ));
  return <Wrapper>{renderData}</Wrapper>;
};

export default Information;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
