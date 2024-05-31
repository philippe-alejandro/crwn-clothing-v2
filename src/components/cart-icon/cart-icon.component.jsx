import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useSelector } from 'react-redux';
import { selectorTotalProductsInCart, selectorCartItems } from '../../store/cart/cart.selector';

const CartIcon = ({ onClick }) => {
    const totalItemsInCart = useSelector(selectorTotalProductsInCart);
    return (
        <div className='cart-icon-container' onClick={onClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{totalItemsInCart ? totalItemsInCart : 0}</span>
        </div>
    )
};

export default CartIcon;
