import { HeaderAPI } from '../api/api'

const SET_USER_AUTH = 'ADD-SET_USER_AUTH-MESSAGE'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_AUTH: {
            return {
                ...state,
                ...action.payload,
                isAuthorized: true
            }
        }

        default: return state
    }
}

// action creators
export const setAuthorizedUser = userData => ({ type: SET_USER_AUTH, payload: userData })

// thunks
export const authMe = () => dispatch => {
    HeaderAPI
        .AuthMe()
        .then(data => dispatch(setAuthorizedUser(data)))
}
