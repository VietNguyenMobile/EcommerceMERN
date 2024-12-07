import React from "react";

import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const { placeholder = "Nhập text", ...rests } = props;
  const handleOnChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <WrapperInputStyle
      placeholder={placeholder}
      value={props.value}
      onChange={handleOnChange}
      {...rests}
    />
  );
};

export default InputForm;
