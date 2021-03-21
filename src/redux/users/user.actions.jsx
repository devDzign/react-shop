import { UserActionTypes } from "./user.types";


export const setAuthentication = (isLoggedIn, user) => {
    return {
        type: UserActionTypes.SET_AUTHENTICATION,
        payload: {
            isLoggedIn: isLoggedIn,
            user: user
        }
    }
}

export const loginRequest = () => (
    {
        type: UserActionTypes.LOGIN_REQUEST
    }
)

export const loginError = (errors) => ({
    type: UserActionTypes.LOGIN_ERROR,
    payload: { errors: errors }
})

export const loginReceive = () => ({
    type: UserActionTypes.LOGIN_RECEIVED
})

export const isAuthenticatedUser = () => {
    return async (dispatch) => {
        // fait ce que tu veux ici

        dispatch(setAuthentication(true, {name: 'mourad', age: 33}))

    }
}