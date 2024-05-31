import { selectorCartItems } from "./cart.selector";
import { CART_ACTION_TYPES } from "./cart.types";

const addProductToCart = (existingProducts, productToAdd) => {
    // first check if productToAdd already exists in existingProducts
    const productExists = existingProducts.find((product) => {
        return product.id === productToAdd.id
    });

    // check if productExists is true and based on this increase amount
    // in value for quantity property or create quantity property for product
    if (productExists) {
        return existingProducts.map((product) => {
            return product.id === productToAdd.id ? 
                ({ ...product, quantity: product.quantity + 1 })
             : (product)
        });
    }

    return [...existingProducts, {...productToAdd, quantity: 1}];
};

const onClickLeftArrow = (cart, id) => {
    const cartUpdated = cart.map((item) => {
        if (item.id === id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });
    return cartUpdated;
};

const onClickRightArrow = (cart, id) => {
    const cartUpdated = cart.map((item) => {
        if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
    });
    return cartUpdated;
};

const onClickTrashIcon = (cart, id) => {
    const cartUpdated = cart.filter((item) => {
        return item.id !== id && item !== null;
    });
    return cartUpdated;
};

export const setIsCartIsDisplayed = (boolean) => {
    return {
        type: CART_ACTION_TYPES.SET_IS_CART_DISPLAYED,
        payload: boolean
    };
};

export const addItemToCart = (cart, productToAdd) => {
    const newCart = addProductToCart(cart, productToAdd);
    return {
        type: CART_ACTION_TYPES.SET_CART,
        payload: newCart
    };
};

export const leftArrowRemoveItem = (cart, productToRemove) => {
    const newCart = onClickLeftArrow(cart, productToRemove);
    return {
        type: CART_ACTION_TYPES.SET_CART,
        payload: newCart
    };
};

export const rightArrowAddItem = (cart, productToAdd) => {
    const newCart = onClickRightArrow(cart, productToAdd);
    return {
        type: CART_ACTION_TYPES.SET_CART,
        payload: newCart
    };
};

export const removeProductTrashIcon = (cart, productToRemove) => {
    const newCart = onClickTrashIcon(cart, productToRemove);
    return {
        type: CART_ACTION_TYPES.SET_CART,
        payload: newCart
    };
};
