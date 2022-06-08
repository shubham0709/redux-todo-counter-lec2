import { addTodo, deleteTodo, completeTodo } from "../store/action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

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
  };

  return (
    <div>
      TodoApp
      <div>
        <input placeholder="type todo here..." ref={ref} />
        <button onClick={addNew}>ADD</button>
        {todos.map((todo, i) => (
          <div key={todo.id}>
            {todo.value}
            <button
              onClick={() => {
                console.log("removing");
              }}
            >
              remove
            </button>
            <button>Mark complete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
