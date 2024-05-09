import { createContext, useState } from 'react';

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

    return [...existingProducts, {...productToAdd, quantity: 1}]
};

export const CartDropdownContext = createContext({
    isCartDisplayed: null,
    setIsCartDisplayed: () => {},
    addItemToCart: () => {},
    cart: [],
    setCart: () => null
});

export const CardDropdownProvider = ({children}) => {
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);
    const [cart, setCart] = useState([]);
    const addItemToCart = (productToAdd) => {
        setCart(addProductToCart(cart, productToAdd));
    };
    const value = {
        isCartDisplayed, 
        setIsCartDisplayed,
        addItemToCart,
        cart,
        setCart
    };
    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    ) 
};