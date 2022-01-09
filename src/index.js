import { createStore } from 'redux';
/*
✅ Store는 data를 저장하는 곳
✅ CreateStore는 reducer를 요구함.
✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.
*/
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now(), text: action.text }]; // Don't mutate 🚨
    case DELETE_TODO:
      return;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// const createToDo = (toDo) => {
//   ul.insertAdjacentHTML('beforeend', `<li>${toDo}</li>`);
// };

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  //createToDo(toDo);
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener('submit', onSubmit);
