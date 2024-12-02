import React from "react";
import { Col, Row, Image, InputNumber } from "antd";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import imageProduct from "../../assets/images/product_sample.webp";
import imageProductSmall from "../../assets/images/product_sample_small.webp";
import {
  WrapperStyleImageSmall,
  WrapperStyleColSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperBtnQualityProduct,
} from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailsComponent = () => {
  const onChange = (value) => {};

  return (
    <Row
      style={{ padding: "16px", backgroundColor: "#FFF", borderRadius: "4px" }}
    >
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image
          src={imageProduct}
          alt="image product"
          preview={false}
          // style={{ marginRight: "20px" }}
        />
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
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>
          Xe máy Honda Air Blade 125 Tiêu Chuẩn 2025
        </WrapperStyleNameProduct>
        <div>
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <WrapperStyleTextSell> | Đã bán 100+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>1.000.000 đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className="address">
            123, Đường 3/2, Phường 12, Quận 10, TP.HCM
          </span>{" "}
          -<span className="change-address">Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
            padding: "10px 0",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber
              min={1}
              max={10}
              defaultValue={1}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            textButton="Chọn mua"
            styleButton={{
              backgroundColor: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
            }}
            size={40}
            border={false}
          />
          <ButtonComponent
            textButton="Mua trả sau"
            styleButton={{
              backgroundColor: "#FFF",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
              border: "1px solid rgb(13,92,182)",
            }}
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
            size={40}
            border={false}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
