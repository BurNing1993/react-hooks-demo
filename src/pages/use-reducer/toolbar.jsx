import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import { Radio } from "antd";
import { changeTheme } from "./themeStore";

const ToolBar = () => {
  const { dispatch } = useContext(ThemeContext);
  const onChange = e => {
    const radioValue = e.target.value;
    const lightTheme = {
      name: "light",
      color: "#000000",
      background: "#eeeeee"
    };
    const darkTheme = {
      name: "dark",
      color: "#ffffff",
      background: "#222222"
    };
    switch (radioValue) {
      case "light":
        dispatch(changeTheme(lightTheme));
        break;
      case "dark":
        dispatch(changeTheme(darkTheme));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Radio.Group onChange={onChange} defaultValue="light">
        <Radio.Button value="light">light</Radio.Button>
        <Radio.Button value="dark">dark</Radio.Button>
      </Radio.Group>
    </>
  );
};
export default ToolBar;
