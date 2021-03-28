import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import userReducer from "./users/user.reducer";
import registrationReducer from "./registration/registration.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};


const rootReducer = combineReducers(
    {
        authenticate: userReducer,
        registration: registrationReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    }
)

export default persistReducer(persistConfig, rootReducer);