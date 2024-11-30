import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  border-bottom: 1px solid #e8e8e8;
  height: 44px;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background-color: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
`;

export const WrapperProducts = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;
