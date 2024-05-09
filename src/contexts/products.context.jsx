import SHOP_DATA from '../shop-data.json';
import { useState, createContext } from 'react';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA);
    const value = { products, setProducts };
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}