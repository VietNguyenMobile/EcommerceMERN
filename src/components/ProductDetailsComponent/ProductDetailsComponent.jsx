import React from "react";
import { Col, Row, Image } from "antd";
import imageProduct from "../../assets/images/product_sample.webp";
import imageProductSmall from "../../assets/images/product_sample_small.webp";
import { WrapperStyleImageSmall, WrapperStyleColSmall } from "./style";

const ProductDetailsComponent = () => {
  return (
    <Row style={{ padding: "16px", backgroundColor: "#FFF" }}>
      <Col span={10}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleColSmall>

          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image product"
              preview={false}
            />
          </WrapperStyleColSmall>
        </Row>
      </Col>
      <Col span={14}>col-14</Col>
    </Row>
  );
};

export default ProductDetailsComponent;
