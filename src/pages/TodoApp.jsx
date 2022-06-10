import {
  addTodo,
  deleteTodo,
  completeTodo,
  getTodos,
  updateTodo,
} from "../store/action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import style from "./TodoApp.module.css";

const TodoApp = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { todos, loading, error } = state.todos;
  //console.log(state.todos);

  useEffect(() => {
    getTodos(dispatch);
  }, []);

  const addNew = () => {
    let value = ref.current.value;
    addTodo(dispatch, {
      value: value,
      isCompleted: false,
    });
    // dispatch(
    //   addTodo({
    //     value: value,
    //     isCompleted: false,
    //   })
    // );
    ref.current.value = null;
  };

  const removeIt = (id) => {
    // dispatch(deleteTodo(id));
    deleteTodo(dispatch, id);
  };

  const completeIt = (todo) => {
    // dispatch(completeTodo(id));
    completeTodo(dispatch, todo);
  };

  const updateIt = (todo) => {
    let value = ref.current.value;
    updateTodo(dispatch, todo, value);
  };

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Something went wrong....</div>;
  }
  return (
    <div>
      TodoApp
      <div>
        <input placeholder="type todo here..." ref={ref} />
        <button onClick={addNew}>ADD</button>
        <div className={style.todoList}>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <div className={style.listItem}>
                <h2 className={todo.isCompleted ? style.dashed : null}>
                  {todo.value}
                </h2>
                <div className={style.buttons}>
                  <button
                    className={style.clickBtn}
                    onClick={() => removeIt(todo.id)}
                  >
                    remove
                  </button>
                  <button
                    className={style.clickBtn}
                    onClick={() => completeIt(todo)}
                  >
                    Mark complete
                  </button>
                  <button
                    className={style.clickBtn}
                    onClick={() => updateIt(todo)}
                  >
                    update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
