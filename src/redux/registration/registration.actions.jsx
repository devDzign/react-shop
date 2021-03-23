import {registrationTypes} from "./registration.types";
import SecurityApi from "../../api/security.api";
import {loginStart} from "../users/user.actions";
import {toast} from "react-toastify";


export const signUpUserAction = ({email, password, confirmPassword, displayName}, history) => ({
    type: registrationTypes.REGISTRATION_USER_SAGA_START,
    payload: {
        credential: {email, password, confirmPassword, displayName},
        history
    }
})

export const registrationRequest = () => (
    {
        type: registrationTypes.REGISTRATION_USER_REQUEST
    }
)

export const registrationError = (errors) => {
    return {
        type: registrationTypes.REGISTRATION_USER_ERROR,
        payload: {
            errors: errors
        }
    }
}

export const registrationReceive = () => ({
    type: registrationTypes.REGISTRATION_USER_RECEIVED
})

export const registrationStart = ({email, password, confirmPassword, displayName}, history) => {
    return async (dispatch) => {
        try {
            await dispatch(registrationRequest());
            await SecurityApi.createUser({email, password, confirmPassword, displayName});
            dispatch(registrationReceive())
            await history.push('/sign-in-and-sign-up')
            dispatch(loginStart({email, password}, history));
            toast.info('You have success registration')
        } catch (error) {
            if (error.response && error.response.status === 400) {
                dispatch(registrationError(error.response.data['violations']))
            } else {
                dispatch(registrationError(null))
            }
        }


    }
}
