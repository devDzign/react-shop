import {cartTypes} from "./cart.types";

export const toggleCartHiddenOrSHow = () => ({
    type: cartTypes.CART_TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) => ({
    type: cartTypes.CART_ADD_ITEM,
    payload: {
        item: item
    }
});

export const removeItem = item => ({
    type: cartTypes.CART_REMOVE_ITEM,
    payload: {
        item:item
    }
});

export const clearItemFromCart = item => ({
    type: cartTypes.CART_CLEAR_ITEM_FROM_CART,
    payload: {
        item:item
    }
});



