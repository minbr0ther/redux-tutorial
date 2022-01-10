import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => ({ type: ADD, text });
const deleteToDo = (text) => ({ type: DELETE, id });

const reducer = (store = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

// 변화가 있는 부분을 react에서 렌덜이 하고 싶다
// => react-redux 필요

export default store;
