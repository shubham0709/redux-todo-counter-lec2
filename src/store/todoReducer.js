import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO
} from "./action.types.js"

export const todoReducer = (state = { todos: [] }, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_TODO: return {
            // state.todos.push({
            //     ...payload,
            //     id: Date.now(),
            // })
            // return { ...state }
            // this commented code also works
            ...state,
            todos: [...state.todos,
            {
                ...payload,
                id: Date.now(),
            }]
        }
        case DELETE_TODO: return state;
        case COMPLETE_TODO: return state;
        default: return state;
    }
}