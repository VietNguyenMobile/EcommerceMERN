import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";

const HomePage = () => {
  const arr = ["TV", "Laptop", "Phone"];
  return (
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {arr.map((item, index) => (
          <TypeProduct key={index} name={item} />
        ))}
      </WrapperTypeProduct>

      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
