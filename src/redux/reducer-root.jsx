import { combineReducers } from "redux";

// Reducers
import userReducer from "./users/user.reducer";
import registrationReducer from "./registration/registration.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers(
    {
        authenticate: userReducer,
        registration: registrationReducer,
        cart: cartReducer
    }
)

export default rootReducer