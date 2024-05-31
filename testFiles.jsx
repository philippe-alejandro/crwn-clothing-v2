import { useState } from "react";
import { createContext } from "react";

const addProductToCart = (existingProds, productToAdd) => {
    // check first if product to add exists in existingProds
    const productExists = existingProds.find((product) => {
        return product.id === productToAdd.id;
    });

    // if productExists is truthy, increment quantity property by 1
    if (productExists) {
        return existingProds.map((product) => {
            if (product.id === productToAdd.id) {
                return { ...product, quantity: product.quantity + 1 }
            }
            return product;
        });
    }

    return [ ...existingProds, { ...productToAdd, quantity: 1 } ];
};

const onClickLeftArrow = (products, id) => {
    // this should return an array containing the products currently
    // in the cart. The quantity property of such products should be
    // decreased by 1 if the product ids match.There the right method to 
    // use here is map().
    return products.map((product) => {
        if (product.id === id && product.quantity > 0) {
            return { ...product, quantity: product.quantity - 1 };  
        }
        return { ...product }
    })
};

const onClickRightArrow = (products, id) => {
    // this should return an array containing the products currently
    // in the cart. The quantity property of such products should be
    // increased by 1 if the product ids match.There the right method to 
    // use here is map().
    return products.map((product) => {
        if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };  
        }
        return { ...product }
    })
};

export const CartContext = createContext({
    cart: [],
    totalItemsInCart: 0,
    addItemToCart: () => {},
    isCartDisplayed: false,
    setIsCartDisplayed: () => {},
    leftArrowRemoveItem: () => {},
    rightArrowAddItem: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCart(addProductToCart(cart, productToAdd));
    };

    const leftArrowRemoveItem = (productToAdd) => {
        setCart(onClickLeftArrow(cart, productToAdd));
    };

    const rightArrowAddItem = (productToAdd) => {
        setCart(onClickRightArrow(cart, productToAdd));
    };

    useEffect(() => {
        const newTotalItemsInCart = cart.reduce((total, product) => {
            return total + product.quantity;
        }, 0);
        setTotalItemsInCart(newTotalItemsInCart);
    }, [cart])

    const value = { 
        cart,
        totalItemsInCart,
        addItemToCart,
        isCartDisplayed,
        setIsCartDisplayed,
        leftArrowRemoveItem,
        rightArrowAddItem
     };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};
