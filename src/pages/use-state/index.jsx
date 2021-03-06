import React, { useState } from "react";
import { Button } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const UseState = () => {
  const [count, setCount] = useState(0);
  const code = `import React, { useState } from 'react';
import { Button } from 'antd';
  
  const UseState = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <div>
          You clicked {count} Times!
        </div>
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
      </>
    )
  }
  export default UseState;`;
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
export default UseState;
