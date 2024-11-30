import React from "react";
import { Checkbox, Col, Rate, Row } from "antd";
import type { GetProp } from "antd";
import {
  WrapperLabelText,
  WrapperTextValue,
  WrapperContent,
  WrapperCheckbox,
  WrapperTextPrice,
} from "./style";

const NavbarComponent = () => {
  const onChange = (checkedValues) => {};

  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => (
          <WrapperTextValue key={option}>{option}</WrapperTextValue>
        ));
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => (
              <Checkbox value={option.value}>{option.label}</Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => (
          <div style={{ display: "flex", gap: "4px" }}>
            <Rate
              style={{ fontSize: "12px" }}
              key={option}
              defaultValue={option}
              disabled
            />
            <span>{`tu ${option} sao`}</span>
          </div>
        ));
      case "price":
        return options.map((option) => (
          <WrapperTextPrice>{option}</WrapperTextPrice>
        ));
      default:
        return null;
    }
  };
  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", ["option1", "option2", "option3"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          {
            value: "a",
            label: "A",
          },
          {
            value: "b",
            label: "B",
          },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ["duoi 49.000", "tren 50.000.000"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
