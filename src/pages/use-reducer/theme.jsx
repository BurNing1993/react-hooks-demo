import React, { createContext, useReducer } from "react";
import { themeReducer } from "./themeStore";

// 创建Context 对象
export const ThemeContext = createContext({});

const Theme = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, {
    name:'light',
    color: "#000000",
    background: "#eeeeee"
  });
  return (
    <ThemeContext.Provider
      value={{
        theme,
        dispatch
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
