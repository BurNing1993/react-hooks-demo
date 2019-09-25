import React, { useEffect } from 'react'
import Prism from 'prismjs';

const HighlightCode = ({ code, lang='js' }) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [code]);
  return (
    <pre className="line-numbers">
      <code className={`language-${lang}`}>
        {code}
      </code>
    </pre>
  )
}

export default HighlightCode;