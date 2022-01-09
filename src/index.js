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
      return [{ id: Date.now(), text: action.text }, ...state]; // Don't mutate 🚨
    case DELETE_TODO:
      return [...state].filter((obj) => obj.id !== action.id);
    default:
      return state;
  }
};

const addToDo = (text) => ({ type: ADD_TODO, text });
const deleteToDo = (e) => ({ type: DELETE_TODO, id: e.target.id });

const store = createStore(reducer);

const dispatchAddToDo = (text) => store.dispatch(addToDo(text));
const dispatchDeleteToDo = (e) => store.dispatch(deleteToDo(e));

const paintToDos = () => {
  ul.innerHTML = '';

  store.getState().forEach((toDo) => {
    ul.insertAdjacentHTML(
      'beforeend',
      `
      <li>${toDo.text}
        <button class="delete" id=${toDo.id}>DEL</button>
      </li>
    `
    );
    document
      .querySelector('.delete')
      .addEventListener('click', dispatchDeleteToDo);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);
