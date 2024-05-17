// import SHOP_DATA from '../shop-data.js';
import { useState, createContext, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => null
});

export const CategoriesMapProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // uncomment and execute in order to create 'categories' collection in Firestore database.
    /*useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);*/

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);
    const value = { categoriesMap, setCategoriesMap };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}