import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Home = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" showLineNumbers style={tomorrowNight}>
      {codeString}
    </SyntaxHighlighter>
  )
}
export default Home;
