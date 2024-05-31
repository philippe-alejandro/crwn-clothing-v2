import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    cart: [],
    isCartDisplayed: false,
    totalProductsInCart: 0
};

export const CartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type) {
        case CART_ACTION_TYPES.SET_CART:
            return {
                ...state,
                cart: payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_DISPLAYED:
            return {
                ...state,
                isCartDisplayed: payload
            }
        case CART_ACTION_TYPES.SET_TOTAL_PRODUCTS_IN_CART:
            return {
                ...state,
                totalProductsInCart: payload
            }
        default:
            return state;
    };
};