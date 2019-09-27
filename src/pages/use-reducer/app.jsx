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
