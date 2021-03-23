import { UserActionTypes } from "./user.types";
import SecurityApi from "../../api/security.api";
import {toast} from "react-toastify";
import {registrationError} from "../registration/registration.actions";


export const setAuthentication = (isLoggedIn, user) => {
    return {
        type: UserActionTypes.SET_AUTHENTICATION,
        payload: {
            isLoggedIn: isLoggedIn,
            user: user
        }
    }
}

/**
 *
 * @param history
 * @returns {function(*): Promise<void>}
 */
export const userLogout = (history) => {

    return async (dispatch) => {
        await SecurityApi.logout();
        await dispatch(setAuthentication(false, null))
        await history.push("/sign-in-and-sign-up");
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

export const signInUserAction = ({email, password}, history) => ({
    type: UserActionTypes.LOGIN_REDUX_SAGA_START,
    payload: {
        credential: {email, password},
        history
    }
})

export const isAuthenticatedUser = () => {
    return async (dispatch) => {
        const isAuthenticated = await SecurityApi.isAuthenticated()
        let currentUser =  null;
        if(isAuthenticated) {
            const {user} =  await SecurityApi.getTokenDecode();
            currentUser =  user;
        }
        dispatch(setAuthentication(isAuthenticated,currentUser))
    }
}



export const loginStart = (credentials, history) => {
    return async (dispatch) => {
        try {
            await dispatch(loginRequest());
            const response = await SecurityApi.loginUserAPI(credentials);
            await dispatch(loginReceive())
            await dispatch ( setAuthentication( true, response.user ) );
            await history.push( "/shop" );
            toast.info('Welcome to the site')
        } catch (error) {
            if (error.response && error.response.status === 400) {
                dispatch(registrationError(error.response.data))
            } else {
                dispatch(registrationError(null))
            }
        }


    }
}