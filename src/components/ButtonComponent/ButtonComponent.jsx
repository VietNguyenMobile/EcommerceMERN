import React from "react";
import { Button } from "antd";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  disabled,
  ...rest
}) => {
  return (
    <Button
      size={size}
      style={{
        ...styleButton,
        background: disabled ? "#ccc" : styleButton.backgroundColor,
      }}
      {...rest}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
