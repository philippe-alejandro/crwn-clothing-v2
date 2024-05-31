import React from 'react';
import Button from "../button/button.component";
import './product-card.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectorCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
    console.log();
    const { price, name, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectorCartItems);
    const onAddProductHandler = () => {
        dispatch(addItemToCart(cartItems, product));
    };

    return  (
        <div className='product-card-container'>
            <img src={`${imageUrl}`} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`$${price}`}</span>
            </div>
            <Button onClick={onAddProductHandler} buttonType='inverted'>Add to Cart</Button>
        </div>
    )
};

export default ProductCard;