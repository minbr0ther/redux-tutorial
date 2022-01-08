import { createStore } from 'redux';
/*
✅ Store는 data를 저장하는 곳
✅ CreateStore는 reducer를 요구함.
✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.
*/

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return count + 1;
    case 'MINUS':
      return count - 1;
    default:
      return 0;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: 'ADD' });
};

const handleMinus = () => {
  countStore.dispatch({ type: 'MINUS' });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
