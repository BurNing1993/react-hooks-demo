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
export default Counter;
