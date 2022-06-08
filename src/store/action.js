import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO
} from "./action.types";

//counter actions
export const counterInc = () => ({ type: INCREMENT_COUNT })
export const counterDec = () => ({ type: DECREMENT_COUNT })

// todo actions : //

export const addTodo = (payload) => ({ type: ADD_TODO, payload })
export const deleteTodo = (id) => ({ type: DELETE_TODO, id })
export const completeTodo = (id) => ({ type: COMPLETE_TODO, id })