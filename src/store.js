import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

// 변화가 있는 부분을 react에서 렌덜이 하고 싶다
// => react-redux 필요

export const actionCreators = { addToDo, deleteToDo };

export default store;
