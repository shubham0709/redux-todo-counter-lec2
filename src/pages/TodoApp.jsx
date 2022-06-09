import { addTodo, deleteTodo, completeTodo } from "../store/action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import style from "./TodoApp.module.css";

const TodoApp = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const todos = state.todos.todos;

  const addNew = () => {
    let value = ref.current.value;
    dispatch(
      addTodo({
        value: value,
        isCompleted: false,
      })
    );
    ref.current.value = null;
  };

  const removeIt = (id) => {
    dispatch(deleteTodo(id));
  };

  const completeIt = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <div>
      TodoApp
      <div>
        <input placeholder="type todo here..." ref={ref} />
        <button onClick={addNew}>ADD</button>
        {todos.map((todo, i) => (
          <div key={todo.id} className={todo.isCompleted ? style.dashed : null}>
            {todo.value}
            <button onClick={() => removeIt(todo.id)}>remove</button>
            <button onClick={() => completeIt(todo.id)}>Mark complete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
