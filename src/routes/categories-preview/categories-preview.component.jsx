import React from 'react';
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectorCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectorCategoriesMap);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((category) => {
                const products = categoriesMap[category];
                return (
                    <CategoryPreview key={category} products={products} category={category}></CategoryPreview>
                )
            })}
        </Fragment>
    )
};

export default CategoriesPreview;