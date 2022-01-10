import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { actionCreators } from '../store';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText('');
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// store로부터 state를 꺼내온다
// a.k.a mapStateToProps()
function mapStateToProps(state) {
  return { toDos: state };
}

// connect의 두번째 인자로 mapDispatchToProps를 사용할 수 있다
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

// Home 컴포넌트에 store를 연결한다
export default connect(mapStateToProps, mapDispatchToProps)(Home);
