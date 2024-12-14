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
        width: "100%",
        backgroundColor: "#efefef",
      }}
    >
      <div style={{ width: "1270px", margin: "0 auto" }}>
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
              <CardComponent key={`CardComponent-1`} />
              <CardComponent key={`CardComponent-2`} />
              <CardComponent key={`CardComponent-3`} />
              <CardComponent key={`CardComponent-4`} />
              <CardComponent key={`CardComponent-5`} />
              <CardComponent key={`CardComponent-6`} />
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
    </div>
  );
};

export default TypeProductPage;
