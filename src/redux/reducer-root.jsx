import { combineReducers } from "redux";

// Reducers
import userReducer from "./users/user.reducer";
import registrationReducer from "./registration/registration.reducer";

const rootReducer = combineReducers(
    {
        authenticate: userReducer,
        registration: registrationReducer
    }
)

export default rootReducer