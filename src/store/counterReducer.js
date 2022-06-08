import { INCREMENT_COUNT, DECREMENT_COUNT } from "./action.types"

export const counterReducer = (state = { count: 0 }, action) => {
    let { type, payload } = action;

    switch (type) {
        case INCREMENT_COUNT: state.count++; break;
        case DECREMENT_COUNT: state.count--; break;
        default: return state;
    }

    return { ...state };
}