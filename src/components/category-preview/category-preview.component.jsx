import ProductCard from "../product-card/product-card.component";
import { Link } from 'react-router-dom';
import './category-preview.styles.scss';

const CategoryPreview = (props) => {
    const { products, category } = props;
    console.log(`category-preview: ${JSON.stringify(products)}`);
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={category}>
                    {category.toUpperCase()}
                </Link>
            </h2>
            <div className='preview'>
                {JSON.parse(JSON.stringify(products)).filter((_, index) => index < 4).map((product) => {
                    return (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    )
                })}
            </div>
        </div>
    )
};

export default CategoryPreview;