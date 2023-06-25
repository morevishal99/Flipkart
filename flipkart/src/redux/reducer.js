const initialState = {
    count: 0,
    value:"ok"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
        case "VALUE":
            return { ...state, value:state.value}
        default:
            return state
    }
}
export default reducer