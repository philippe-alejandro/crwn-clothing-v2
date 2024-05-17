import { useState, useEffect, useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categoriesMap.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);
    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    )
                })}
            </div>
        </Fragment>
    )
};

export default Category;
