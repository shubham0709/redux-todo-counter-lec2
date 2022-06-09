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
        case DELETE_TODO: {
            let id = action.id;
            const updatedTodos = state.todos.filter(x => x.id !== id)
            console.log(updatedTodos);
            return {
                ...state,
                todos: [...updatedTodos]
            }
        }
        case COMPLETE_TODO: {
            let id = action.id;
            state.todos.forEach((x, i) => {
                if (x.id === id) {
                    state.todos[i].isCompleted = true;
                    return { ...state };
                }
            })
            return { ...state };
        }
        default: return state;
    }
}