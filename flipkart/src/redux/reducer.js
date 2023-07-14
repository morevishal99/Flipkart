import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, NAV_VALUE } from "./action.type"

const initialState = {
    count: 0,
    loading: false,
    navValue: null,
    data: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case "INCREMENT":
        //     return { ...state, count: state.count + 1 }
        // case "DECREMENT":
        //     return { ...state, count: state.count - 1 }
        // case "VALUE":
        //     return { ...state, value: state.value }
        case NAV_VALUE:
            return { ...state, navValue: action.payload }
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, error: null }
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data:action.payload }
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
export default reducer