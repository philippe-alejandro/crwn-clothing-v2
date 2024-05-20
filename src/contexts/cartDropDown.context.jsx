import { createContext, useState, useEffect, useReducer } from 'react';

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

export const CartDropdownContext = createContext({
    isCartDisplayed: null,
    setIsCartDisplayed: () => {},
    addItemToCart: () => {},
    leftArrowRemoveItem: () => {},
    rightArrowAddItem: () => {},
    removeProductTrashIcon: () => {},
    cart: [],
    totalProductsInCart: 0
});

const CartDropdownActionTypes = {
    setIsCartDisplayed: 'setIsCartDisplayed',
    setCart: 'setCart',
    setTotalProductsInCart: 'setTotalProductsInCart'
};

const INITIAL_STATE = {
    isCartDisplayed: false,
    cart: [],
    totalProductsInCart: 0
};

const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case CartDropdownActionTypes.setCart:
            return {
                ...state,
                ...payload
            };
        default:
            throw new Error(`${type} is not available in Cart Reducer.`);
    }
};

export const CartDropdownProvider = ({children}) => {
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
    const { cart, totalProductsInCart } = state;

    const setCart = (cart) => {
        const totalProductsInCart = cart.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
        const payload ={
            cart: cart,
            totalProductsInCart: totalProductsInCart
        };
        dispatch({
            type: CartDropdownActionTypes.setCart,
            payload: payload
        });
    };

    const addItemToCart = (productToAdd) => {
        const newCart = addProductToCart(cart, productToAdd);
        setCart(newCart);
    };

    const leftArrowRemoveItem = (productToRemove) => {
        const newCart = onClickLeftArrow(cart, productToRemove);
        setCart(newCart);
    };

    const rightArrowAddItem = (productToAdd) => {
        const newCart = onClickRightArrow(cart, productToAdd);
        setCart(newCart);
    };

    const removeProductTrashIcon = (productToRemove) => {
        const newCart = onClickTrashIcon(cart, productToRemove);
        setCart(newCart);
    };

    const value = {
        isCartDisplayed,
        setIsCartDisplayed,
        cart,
        totalProductsInCart,
        addItemToCart,
        leftArrowRemoveItem,
        rightArrowAddItem,
        removeProductTrashIcon
    };
//-------------------------------------------------------------------------
    /*
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalProductsInCart, setTotalProductsInCart] = useState(0);

    // the reason this function is not put inside a useEffect, is because
    // it is activated whenever the 'Add to Cart' button is pressed in the 
    // ProductCard component. Functionalities that are executed when a manual
    // event happens is triggered, should be put inside the useEffect. Opposite
    // examples of this are fetching data from a 3rd party service. 

    const addItemToCart = (productToAdd) => {
        setCart(addProductToCart(cart, productToAdd));
    };

    // Opposite to the addItemToCart function, we have the totalProducts function 
    // which can be put in a useEffect because it won't be triggered when an event
    // is triggered by the user such as clicking a button, but returns a result based
    // on the current data contained inside the cart.
    useEffect(() => {
        const productAmounts = cart.map((item) => {
            return item.quantity;
        });
        const totalProducts = productAmounts.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0);
        setTotalProductsInCart(totalProducts);
    }, [cart]);

    const value = {
        isCartDisplayed, 
        setIsCartDisplayed,
        addItemToCart,
        cart,
        setCart,
        totalProductsInCart
    };
    */
    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    ) 
};