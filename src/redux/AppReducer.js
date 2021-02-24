import {checkAuth} from "./AuthReducer";

const IS_AUTH = 'IS_AUTH'

let initState = {
    isInit: false
}


const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isInit: true
            }
        default:
            return state
    }
}

export const isInit = () => ({type: IS_AUTH})

export const initApp = () => (dispatch) => {
    let promise = dispatch(checkAuth())
    Promise.all([promise]).then(() => {
        dispatch(isInit())
    })
}

export default AppReducer