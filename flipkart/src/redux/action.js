import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, NAV_VALUE } from "./action.type"

export const Increment = () => {
    return { type: "INCREMENT" }
}
export const Decrement = () => {
    return { type: "DECREMENT" }
}

export const NavbarValue = (value) => ({
    type: NAV_VALUE,
    payload: value
})
// export const FetchData = (data) => ({
//     type: "FETCH_DATA_FROM_API",
//     payload: data
// })
export const fetchData = (category, navValue) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });

        try {
            let res = await fetch(`https://kind-plum-agouti-tam.cyclic.app/product/${category}`)
            let data = await res.json()
            if (navValue) {
                let filterdata = data.filter((item) =>
                    item.title.includes(navValue))
                dispatch({ type: FETCH_DATA_SUCCESS, payload: filterdata })
            } else {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: data })
            }
            // let ok='hello'
            // .then((res) => res.json())
            // .then((res) => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }))
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILURE, payload: error.message })
        }
    }

}