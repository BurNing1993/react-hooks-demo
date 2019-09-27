import React from "react";
import Theme from "./theme";
import App from "./app";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const UserReducer = () => {
  const indexCode = `// index.jsx
import React from "react";
import Theme  from './theme';
import App from './app';
  
  const UserReducer = () => {
    return (
        <Theme>
          <App/>
        </Theme>
    );
  };
  
  export default UserReducer;
  `;
  const themeCode = `//theme.jsx
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
  `;
  const storeCode = `// themeStore.js
// actionTypes
const CHANGE_THEME = 'CHANGE_THEME';
  
  // Action Creators
  export function changeTheme(theme) {
    return {
      type: CHANGE_THEME,
      theme
    }
  }
  
  // Reducers
  export function themeReducer(state, action) {
    switch (action.type) {
      case CHANGE_THEME:
        return {
          ...state,
          ...action.theme
        }
  
      default:
        return state;
    }
  }`;

  const appCode = `// app.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import Toolbar  from './toolbar'
  
  const App = () => {
    const { theme } = useContext(ThemeContext);
    return (
      <div
        className="app"
        style={{ color: theme.color, backgroundColor: theme.background }}
      >
        <Toolbar />
       <div>
         APP CONTENT!
       </div>
      </div>
    );
  };
  export default App;
  `;
  const toolbarCode = `// toolbar.jsx
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
  
  `;
  return (
    <>
      <Theme>
        <App />
      </Theme>
      <div className="codes">
        <div className="code">
          <SyntaxHighlighter
            language="react"
            showLineNumbers
            style={tomorrowNight}
          >
            {indexCode}
          </SyntaxHighlighter>
        </div>
        <div className="code">
          <SyntaxHighlighter
            language="react"
            showLineNumbers
            style={tomorrowNight}
          >
            {themeCode}
          </SyntaxHighlighter>
        </div>
        <div className="code">
          <SyntaxHighlighter
            language="react"
            showLineNumbers
            style={tomorrowNight}
          >
            {storeCode}
          </SyntaxHighlighter>
        </div>
        <div className="code">
          <SyntaxHighlighter
            language="react"
            showLineNumbers
            style={tomorrowNight}
          >
            {appCode}
          </SyntaxHighlighter>
        </div>
        <div className="code">
          <SyntaxHighlighter
            language="react"
            showLineNumbers
            style={tomorrowNight}
          >
            {toolbarCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default UserReducer;
