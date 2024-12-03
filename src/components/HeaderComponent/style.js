import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  background-color: rgb(26, 148, 255);
  padding: 10px 120px;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 1270px;
  padding: 10px 0;
`;

export const WrapperTextHeader = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
  fontsize: 18px;
`;

export const WrapperTextHeaderSmall = styled.span`
  color: white;
  font-size: 12px;
  white-space: nowrap;
`;
