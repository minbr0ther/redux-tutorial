# vanilla-redux + react-redux

초보자를 위한 리덕스 101 by Nomad Coders [🔗Notion](https://private-sweater-384.notion.site/101-by-NomadCoders-93dafd2ee0254656a0678ef3c5c3a0e5)

# **#4 REDUX TOOLKIT (BONUS)**

## **#4.0 Redux Toolkit (02:17)**

redux를 사용하면서 boiler plate code (상용구 코드) 가 필요하다

```jsx
yarn add @reduxjs/toolkit
```

## **#4.1 createAction (06:16)**

```jsx
const addToDo = createAction('ADD'); // 새로운 부분
const deleteToDo = createAction('DELETE'); // 새로운 부분

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type: // 새로운 부분
      // action.text -> action.payload
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type: // 새로운 부분
      // action.id -> action.payload
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};
```

![Untitled](%E1%84%8E%E1%85%A9%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A1%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%8B%E1%85%B1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%B3%20101%20by%20NomadCoders%209dd7deb9549948889b799a3f8e800b73/Untitled.png)

action을 따로 정의하지 않아도 되서 최적화가 되었다

## **#4.2 createReducer (07:52)**

### createReducer 특징

1.  더이상 switch가 필요 없다
2.  state를 mutate(복제)하기 쉽다
3.  두가지 방법이 존재
    1. state 를 직접 return
    2. state mutate (push, ..)

![Untitled](%E1%84%8E%E1%85%A9%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A1%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%8B%E1%85%B1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%B3%20101%20by%20NomadCoders%209dd7deb9549948889b799a3f8e800b73/Untitled%201.png)

```jsx
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
```

## **#4.3 configureStore (07:13)**

**configureStore는 아주 쿨한 미들웨어와 함께 store을 생성한다**

![Untitled](%E1%84%8E%E1%85%A9%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A1%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%8B%E1%85%B1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%B3%20101%20by%20NomadCoders%209dd7deb9549948889b799a3f8e800b73/Untitled%202.png)

AirBnB에서 redux developer tool을 이용해서 본 redux state 모습

## **#4.4 createSlice (05:56)**

createSlice는 reducer 뿐만 아니라 actions도 생성 해준다

toDos의 createSlice 알아서 Reducer를 우리에게 준다

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  // 옵션들
  name: 'toDosReducer', // redux developer tool 에서 볼 수 있음
  initialState: [],
  reducers: {
    add: (state, action) => {
      // toDos객체 안에 들어가서 이름 변경
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (
      state,
      action // toDos객체 안에 들어가서 이름 변경
    ) => state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
```

## **#4.5 Conclusions (02:28)**
