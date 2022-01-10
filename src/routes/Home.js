import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({ toDos }) {
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText('');
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

// store로부터 state를 꺼내온다
// a.k.a mapStateToProps()
function mapStateToProps(state) {
  return { toDos: state };
}

// Home 컴포넌트에 store를 연결한다
export default connect(mapStateToProps)(Home);
