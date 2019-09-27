import React, { createContext, useState, useContext } from "react";
import { Button } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

// 创建Context 对象
const CountContext = createContext();

const Counter = () => {
  const count = useContext(CountContext);
  return (
    <>
      <h2>Counter->{count}</h2>
    </>
  );
};

const UseContext = () => {
  const [count, setCount] = useState(0);
  const code = `import React, { createContext, useState, useContext } from "react";
import { Button } from "antd";
  
  // 创建Context 对象
  const CountContext = createContext();
  
  const Counter = () => {
    const count = useContext(CountContext);
    return (
      <>
        <h2>Counter->{count}</h2>
      </>
    );
  };
  
  const UseContext = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <div>You clicked {count} Times!</div>
        <Button
          type="primary"
          shape="round"
          icon="plus"
          onClick={() => setCount(count + 1)}
        >
          Click
        </Button>
        <Button
          type="primary"
          shape="round"
          icon="arrow-left"
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
        <CountContext.Provider value={count}>
          <Counter />
        </CountContext.Provider>
      </>
    );
  };
  export default UseContext;`;
  return (
    <>
      <div className="top">
        <div>You clicked {count} Times!</div>
        <Button
          type="primary"
          shape="round"
          icon="plus"
          onClick={() => setCount(count + 1)}
        >
          Click
        </Button>
        <Button
          type="primary"
          shape="round"
          icon="arrow-left"
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
        <CountContext.Provider value={count}>
          <Counter />
        </CountContext.Provider>
      </div>
      <div className="code">
        <SyntaxHighlighter
          language="react"
          showLineNumbers
          style={tomorrowNight}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};
export default UseContext;
