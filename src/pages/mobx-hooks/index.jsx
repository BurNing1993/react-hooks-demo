import React from 'react';
import { useObserver, useLocalStore } from 'mobx-react';
import { Button } from 'antd';
import Count from './countStore';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MobxHooks = () => {
  const shallCode=`yarn add mobx mobx-react
# mobx-react 6.x or mobx-react-lite@1.4.0`
  const countCode=`// countStore.js
  import { observable, action, computed } from 'mobx';
  
  class Count {
    @observable
    count = 0;
  
    @computed
    get doubleCount() {
      return this.count * 2;
    }
  
    @action.bound
    increment() {
      this.count++;
    }
  
    @action.bound
    decrease() {
      this.count--;
    }
  
    @action.bound
    set(num) {
      this.count = num;
    }
  }
  
  export default Count;`
  const indexCode=`// index.jsx
  import React from 'react';
  import { useObserver, useLocalStore } from 'mobx-react';
  import { Button } from 'antd';
  import Count from './countStore';
  
  const MobxHooks = () => {
    const countStore = useLocalStore(() => new Count());
    return useObserver(() => (
      <>
        <p>count:{countStore.count}</p>
        <p>doubleCount:{countStore.doubleCount}</p>
        <Button
          type="primary"
          shape="round"
          icon="plus"
          onClick={() => countStore.increment()}
        >
          Count Up
        </Button>
        <Button
          type="primary"
          shape="round"
          icon="minus"
          onClick={() => countStore.decrease()}
        >
          Count Down
        </Button>
        <Button
          type="danger"
          shape="round"
          icon="warning"
          onClick={() => countStore.set(0)}
        >
          Reset Count
        </Button>
      </>
    ));
  };
  export default MobxHooks;`
  const countStore = useLocalStore(() => new Count());
  return useObserver(() => (
    <>
      <p>count:{countStore.count}</p>
      <p>doubleCount:{countStore.doubleCount}</p>
      <Button
        type="primary"
        shape="round"
        icon="plus"
        onClick={() => countStore.increment()}
      >
        Count Up
      </Button>
      <Button
        type="primary"
        shape="round"
        icon="minus"
        onClick={() => countStore.decrease()}
      >
        Count Down
      </Button>
      <Button
        type="danger"
        shape="round"
        icon="warning"
        onClick={() => countStore.set(0)}
      >
        Reset Count
      </Button>
      <div className="code">
        <SyntaxHighlighter
          language="react"
          showLineNumbers
          style={tomorrowNight}
        >
          {shallCode}
        </SyntaxHighlighter>
      </div>
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
          {countCode}
        </SyntaxHighlighter>
      </div>
    </>
  ));
};
export default MobxHooks;
