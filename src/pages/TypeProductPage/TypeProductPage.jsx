import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Row, Pagination, Col } from "antd";
import { WrapperProducts, WrapperNavbar } from "./style";

const TypeProductPage = () => {
  const onChange = (page) => {};

  return (
    <div
      style={{
        padding: "0 120px",
        backgroundColor: "#efefef",
      }}
    >
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts span={20}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination
            // showQuickJumper
            // style={{ margin: "20px auto" }}
            defaultCurrent={1}
            total={10} // total number of products in the database
            onChange={onChange}
            style={{ marginTop: "10px", textAlign: "center" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
