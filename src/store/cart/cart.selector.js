import { createSelector } from "reselect";

export const selectorCartReducer = (state) => {
    return state.cart;
};

export const selectorCartItems = createSelector(
    [selectorCartReducer],
    (selectorCartReducer) => {
        return selectorCartReducer.cart;
    }
); 

export const selectorIsCartDisplayed = createSelector(
    [selectorCartReducer],
    (selectorCartReducer) => {
        return selectorCartReducer.isCartDisplayed;
    }
); 

export const selectorTotalProductsInCart = createSelector(
    [selectorCartItems],
    (cartItems) => {
        console.log('cartItems: ', cartItems);
        const totalProducts = cartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0)
        console.log('totalProducts: ', totalProducts);
        return totalProducts;
    }
);