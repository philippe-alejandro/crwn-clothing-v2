import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import PaginationRounded from '../../components/pagination/pagination.component';
import { selectorCategoriesMap } from '../../store/categories/categories.selector';
import './category.styles.scss';
import React from 'react';

const Category = () => {
    const { category } = useParams();
    console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectorCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(3);

    const slicedProducts = products && products.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );
    const paginationBtns = products && Math.ceil(products.length / productsPerPage);
    console.log('paginationBtns: ', paginationBtns);


    useEffect(() => {
        console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
      };

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {slicedProducts && slicedProducts.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    )
                })}
            </div>
            {paginationBtns && (
                <PaginationRounded
                    numberOfPaginationBtns={paginationBtns} 
                    handlePageChange={handlePageChange}
                />
            )}
        </Fragment>
    )
};

export default Category;
