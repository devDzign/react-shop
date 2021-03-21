import { combineReducers } from "redux";

// Reducers
import userReducer from "./users/user.reducer";

const rootReducer = combineReducers(
    {
        authenticate: userReducer
    }
)

export default rootReducer