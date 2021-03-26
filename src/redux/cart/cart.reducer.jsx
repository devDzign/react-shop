import { cartTypes } from "./cart.types";

const INITIAL_STATE = {
    hidden: true,
    totalItems: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.CART_TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;