import { createContext, useState, useEffect } from 'react';

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
    setCart: () => {},
    totalProductsInCart: null
});

export const CardDropdownProvider = ({children}) => {
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
    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    ) 
};

// create a function that takes in the existing items in the cart and also
// takes in a new item. The paramters would be : existingItems and productToAdd

const addProductToCartV2 = (existingItems, productToAdd) => {
    // check if productToAdd exists in existingItems
    const addedProductExists = existingItems.find((product) => {
        return product.id === productToAdd.id
    });

    if (addedProductExists) {
        return existingItems.map((product) => {
            return product.id === productToAdd.id ? 
                { ...product, quantity: product.quantity + 1 } : product
        })
    }
    return [ ...existingItems, { ...productToAdd, quantity: 1 } ];
};

const CategoriesMapContextV2 = createContext({
    isCartDisplayed: null,
    setIsCartDisplayed: () => {},
    addItemToCart: () => {},
    cart: null,
    setCart: () => {},
    totalProductsInCart: null
});

const CategoriesMapProviderV2 = () => {
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);
    const [totalProductsInCart, setTotalProductsInCart] = useState(0);
    const [cart, setCart] = useState([]);

    // the reason this function is not put inside a useEffect, is because
    // it is activated whenever the 'Add to Cart' button is pressed in the 
    // ProductCard component. Functionalities that are executed when a manual
    // event happens is triggered, should be put inside the useEffect. Opposite
    // examples of this are fetching data from a 3rd party service. 
    const addItemToCart = (productToAdd) => {
        setCart(addProductToCartV2(cart, productToAdd));
    };
    // Opposite to the addItemToCart function, we have the totalProducts function 
    // which can be put in a useEffect because it won't be triggered when an event
    // is triggered by the user such as clicking a button, but returns a result based
    // on the current data contained inside the cart.
    useEffect(() => {
        const totalProducts = cart.reduce((accumulator, product) => {
            return accumulator + product.quantity;
        }, 0);
        setTotalProductsInCart(totalProducts);
    }, [cart]);

    const value = { 
        cart, 
        setCart,
        addItemToCart,
        isCartDisplayed,
        setIsCartDisplayed,
        totalProductsInCart
    };

    return (<></>)
};
