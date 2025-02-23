import styled from "styled-components";
import { Col } from "antd";

export const WrapperProducts = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const WrapperNavbar = styled(Col)`
  background-color: #fff;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  height: fit-content;
  margin-top: 20px;
  width: 200px;
`;
