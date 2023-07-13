import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./action.type"

export const Increment = () => {
    return { type: "INCREMENT" }
}
export const Decrement = () => {
    return { type: "DECREMENT" }
}

export const NavbarValue = (value) => ({
    type: "NAV_VALUE",
    payload: value
})
export const FetchData = (data) => ({
    type: "FETCH_DATA_FROM_API",
    payload: data
})
export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    fetch("https://kind-plum-agouti-tam.cyclic.app/product/womens")
        .then((res) => res.json())
        .then((data) => { dispatch({ type: FETCH_DATA_SUCCESS, payload: data }) })
        .catch((error) => { dispatch({ type: FETCH_DATA_FAILURE, payload: error }) })
}