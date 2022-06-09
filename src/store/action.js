import axios from "axios";
import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR,
    GET_TODOS_LOADING
} from "./action.types";

//counter actions
export const counterInc = () => ({ type: INCREMENT_COUNT })
export const counterDec = () => ({ type: DECREMENT_COUNT })

// todo actions : //

export const getTodos = (dispatch) => {
    dispatch({ type: GET_TODOS_LOADING });
    axios.get("http://localhost:8080/todos").then(res => {
        //console.log(res.data);
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    }).catch(err => {
        console.log("something went wrong ", err);
        dispatch({ type: GET_TODOS_ERROR, payload: err });
    })
}

export const addTodo = (dispatch, payload) => {
    axios.post("http://localhost:8080/todos", payload)
        .then(res => {
            dispatch({ type: ADD_TODO, payload: res.data })
        });
}

export const deleteTodo = (id) => ({ type: DELETE_TODO, id });

export const completeTodo = (id) => ({ type: COMPLETE_TODO, id });