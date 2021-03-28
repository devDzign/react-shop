import { cartTypes } from "./cart.types";
import {addItemToCart, removeItemFromCart} from "./cart.utils";

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
        case cartTypes.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload.item)
            };
        case cartTypes.CART_CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.item.id
                )
            };
        default:
            return state;
    }
}

export default cartReducer;