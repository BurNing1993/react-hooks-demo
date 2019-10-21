import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './counter.jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ReduxHooks = () => {
  const shallCode = `yarn add redux react-redux`;
  const indexCode = `// index.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './counter.jsx';
  
const ReduxHooks = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default ReduxHooks;`;
  const counterCode = `// counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countDown, countUp, setCount } from './store';
import { Button } from 'antd';
  
const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <p>count:{count}</p>
      <Button
        type="primary"
        shape="round"
        icon="plus"
        onClick={() => dispatch(countUp())}
      >
        Count Up
      </Button>
      <Button
        type="primary"
        shape="round"
        icon="minus"
        onClick={() => dispatch(countDown())}
      >
        Count Down
      </Button>
      <Button
        type="danger"
        shape="round"
        icon="warning"
        onClick={() => dispatch(setCount(0))}
      >
        Reset Count
      </Button>
    </>
  );
};
export default Counter;`;
  const storeCode = `// store.js
import { createStore } from 'redux';

// action type
const COUNT_UP = 'COUNT_UP';
const COUNT_DOWN = 'COUNT_DOWN';
const SET_COUNT = 'SET_COUNT';

// Action Creators
export function countUp() {
  return { type: COUNT_UP };
}
export function countDown() {
  return { type: COUNT_DOWN };
}
export function setCount(value) {
  return { type: SET_COUNT, value };
}

// reducer
const defaultState = {
  count: 0
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: state.count + 1 };
    case COUNT_DOWN:
      return { ...state, count: state.count - 1 };
    case SET_COUNT:
      return { ...state, count: action.value };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;`;
  return (
    <Provider store={store}>
      <Counter />
      <div className="code">
        <SyntaxHighlighter
          language="shall"
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
          {counterCode}
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
    </Provider>
  );
};
export default ReduxHooks;
