import React from "react";
import { Badge, Col } from "antd";
import Search from "antd/lib/transfer/search";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  return (
    <div style={{width: '100%', background: 'rgb(26,148,255)', display: 'flex', justifyContent: 'center'}}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>Viet Ecommerce</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            placeholder="input search text"
            // allowClear
            // onSearch={onSearch}
            // style={{ width: 200 }}
            size="large"
            // enterButton
            textButton="Tìm kiếm"
            backgroundColorInput="#fff"
            backgroundColorButton="rgb(13,92,182)"
            bordered={false}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <WrapperHeaderAccount>
            <Badge count={5} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </WrapperHeaderAccount>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
