import React, { useState } from "react";
import { Input } from "antd";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder = "Nhập text", ...rests } = props;

  return (
    <WrapperInputStyle
      placeholder="Nhập text"
      value={valueInput}
      // onChange={(e) => setValueInput(e.target.value)}
      {...rests}
    />
  );
};

export default InputForm;
