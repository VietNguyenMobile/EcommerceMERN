import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
      <Input
        placeholder={placeholder}
        size={size}
        bordered={bordered}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: 0,
          borderWidth: 0,
        }}
      />
      <Button
        // type="primary"
        bordered={bordered}
        size={size}
        style={{
          backgroundColor: backgroundColorButton,
          color: colorButton,
          borderRadius: 0,
          border: !bordered && "none",
        }}
        icon={<SearchOutlined color={colorButton} />}
      >
        <span style={{ color: colorButton }}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;

// rafce
