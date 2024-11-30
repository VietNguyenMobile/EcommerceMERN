import styled from "styled-components";
import { Col } from "antd";

export const WrapperProducts = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;

export const WrapperNavbar = styled(Col)`
  background-color: #fff;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  height: fit-content;
  margin-top: 20px;
`;
