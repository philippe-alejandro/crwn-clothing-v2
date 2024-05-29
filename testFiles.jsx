import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./src/components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectorCategoriesMap } from "./src/store/categories/categories.selector";


const Category = () => {
    const category = useParams();
    const categoriesMap = useSelector(selectorCategoriesMap);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (
        <Fragment>
            <h2 className="category-title"></h2>
            <div className="category-container">
                {products && products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
                }
            </div>
        </Fragment>
    )
};

export default Category;