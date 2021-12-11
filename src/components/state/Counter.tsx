import { useReducer } from "react"

const initialState = {count: 0}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        default:
            return state;
    }
}


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <button>Increment 10</button>
            <button>Decrement 10</button>
        </>
    )
}
