import React from "react";
import { Card } from "antd";
import {
  StyleNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
  WrapperCard,
  WrapperImageStyle,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import { Image } from "antd";
import logo_official from "../../assets/images/logo_official.png";

const CardComponent = () => {
  return (
    <WrapperCard
      hoverable
      style={{ width: 240 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <WrapperImageStyle
        src={logo_official}
        style={{ position: "absolute", top: 0, left: -1 }}
        alt="Logo Official"
      />
      <StyleNameProduct>iPhone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.96</span>{" "}
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000 đ<WrapperDiscountText>-10%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCard>
  );
};

export default CardComponent;
