import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    GET_TODOS_SUCCESS,
    GET_TODOS_LOADING,
    GET_TODOS_ERROR,

} from "./action.types.js"

const initialState = {
    loading: false,
    error: false,
    todos: []
}
export const todoReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case GET_TODOS_LOADING: {
            return { ...state, loading: true, error: false }
        }
        case GET_TODOS_SUCCESS: {
            return { ...state, todos: payload, loading: false, error: false }
        }
        case GET_TODOS_ERROR: {
            return { ...state, loading: false, error: true }
        }
        case ADD_TODO:
            // console.log(state, action, "from CASE_TODO");
            return {
                // state.todos.push({
                //     ...payload,
                //     id: Date.now(),
                // })
                // return { ...state }
                // this commented code also works
                ...state,
                todos: [...state.todos,
                {
                    ...payload
                }]
            }
        case DELETE_TODO: {
            let { id } = action;
            const updatedTodos = state.todos.filter(x => x.id !== id)
            // console.log(updatedTodos);
            return {
                ...state,
                todos: updatedTodos
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
        case UPDATE_TODO: {
            console.log(action);
            let id = action.payload.id;
            state.todos.forEach((x, i) => {
                if (x.id === id) {
                    state.todos[i].value = action.payload.value;
                    state.todos[i].isCompleted = false;
                    return { ...state };
                }
            })
            return { ...state };
        }
        default: return state;
    }
}