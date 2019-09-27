import React, { useState, useEffect } from "react";
import { Button } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} Times!`;
    return () => {
      document.title = "Default Title!"; // 有清除操作的 effect
    };
  }, [count]); // 仅在 count 更改时更新
  const code = `import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
  
const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = \`You clicked \${count} Times!\`
      return () => {
        document.title = 'Default Title!' // 有清除操作的 effect 
      }
    }, [count]);  // 仅在 count 更改时更新
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
  export default UseEffect;`;
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
export default UseEffect;
