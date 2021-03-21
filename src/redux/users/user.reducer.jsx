import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    isLoggedIn:   false,
    isFetching: false,
    errors: null,
    user: null
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UserActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case UserActionTypes.LOGIN_RECEIVED:
            return {
                ...state,
                isFetching: false,
                errors: null
            }
        case UserActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isFetching: false,
                errors: action.payload.errors
            }
        case UserActionTypes.SET_AUTHENTICATION:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user,
                errors: null
            };
        default:
            return state;
    }
}

export default userReducer;