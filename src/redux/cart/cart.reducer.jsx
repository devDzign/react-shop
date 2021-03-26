import { cartTypes } from "./cart.types";
import {addItemToCart} from "../../utils/cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.CART_TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload.item)
            }
        default:
            return state;
    }
}

export default cartReducer;