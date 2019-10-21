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

export default store;
