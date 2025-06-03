import {useState} from "react";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";

/**
 * createSlice
 * slice.actions
 * store = configureStore
 * dispatch = useDispatch(), useSelector
 * pass store in provider
 */

// 1. create Redux slice
let todoSlice = createSlice({
  name: "todolist",
  initialState: {
    items: []
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
    }
  }
})

// actions
let {add} = todoSlice.actions

// 2. create store
const store = configureStore({
  reducer: {todoList: todoSlice.reducer}
});

// 2. usage app, useDispatch & actions
export function Hello() {
  let [item, setItem] = useState("")
  let dispatch = useDispatch()
  let items = store.getState().todoList.items
  // let items = useSelector(state => state.todoList.items)

  let addItem = () => {
    dispatch(add(item))
    setItem("")
  }
  return (
    <>
      <h3>Redux Practise</h3>
      <h4>Todo List</h4>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      Todo
      <input onChange={e => setItem(e.target.value)}
             onKeyDown={e => e.key === "Enter" && addItem()}
             value={item}
      />
      <button onClick={() => addItem()}>Add</button>
    </>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <Hello/>
    </Provider>
  )
}
