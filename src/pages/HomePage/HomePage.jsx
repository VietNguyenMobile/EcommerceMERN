import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperTypeProduct,
  WrapperButtonMore,
  WrapperProducts,
} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const HomePage = () => {
  const arr = ["TV", "Laptop", "Phone"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item, index) => (
            <TypeProduct key={index} name={item} />
          ))}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{ backgroundColor: "#efefef", padding: "0 120px" }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <WrapperButtonMore
            textButton="Xem thêm"
            type="outline"
            styleTextButton={{ fontWeight: 500 }}
            styleButton={{
              border: "1px solid rgb(11,116,229)",
              color: "rgb(11,116,229)",
              width: "240px",
              height: "38px",
              borderRadius: "4px",
            }}
          />
        </div>

        <NavbarComponent />
      </div>
    </>
  );
};

export default HomePage;
