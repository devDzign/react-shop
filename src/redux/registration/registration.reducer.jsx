import { registrationTypes } from "./registration.types";

const INITIAL_STATE = {
    isFetching: false,
    errors: null
}

const registrationReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case registrationTypes.REGISTRATION_USER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case registrationTypes.REGISTRATION_USER_RECEIVED:
            return {
                ...state,
                isFetching: false,
                errors: null
            }
        case registrationTypes.REGISTRATION_USER_ERROR:
            return {
                ...state,
                isFetching: false,
                errors: action.payload.errors
            }

        default:
            return state;
    }
}

export default registrationReducer;