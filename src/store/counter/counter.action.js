import { DECREMENT_COUNT } from "./counter.types"
import { INCREMENT_COUNT } from "./counter.types"

export const counterInc = () => ({ type: INCREMENT_COUNT })
export const counterDec = () => ({ type: DECREMENT_COUNT })