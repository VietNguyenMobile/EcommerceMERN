import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        placeholder={placeholder}
        size={size}
        // bordered={bordered}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: 0,
          borderWidth: 0,
        }}
      />
      <ButtonComponent
        // bordered={bordered}
        size={size}
        styleButton={{
          backgroundColor: backgroundColorButton,
          color: colorButton,
          borderRadius: 0,
          border: !bordered && "none",
        }}
        styleTextButton={{ color: colorButton }}
        icon={<SearchOutlined color={colorButton} />}
        textButton="Tìm kiếm"
      />
    </div>
  );
};

export default ButtonInputSearch;

// rafce
