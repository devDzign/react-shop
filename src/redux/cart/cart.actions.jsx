import {cartTypes} from "./cart.types";

export const toggleCartHiddenOrSHow = () => ({
    type: cartTypes.CART_TOGGLE_CART_HIDDEN
})


export const addItemToCart = (item) => ({
    type: cartTypes.CART_ADD_ITEM,
    payload: {
        item: item
    }
})

