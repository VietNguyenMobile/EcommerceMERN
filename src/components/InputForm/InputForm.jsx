import React from "react";
import { Input } from "antd";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const { placeholder = "Nhập text", ...rests } = props;
  // const handleOnChange = (e) => {
  //   props.onChange(e.target.value);
  // };
  // console.log("props.value", props.value);
  return (
    <Input
      placeholder={placeholder}
      value={props.value}
      // onChange={handleOnChange}
      onChange={props.onChange}
      {...rests}
    />
  );
};

export default InputForm;
