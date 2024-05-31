import React from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { selectorCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const CartDropdown = (props) => {
    const cart = useSelector(selectorCartItems);
    const navigate = useNavigate();
    const onCheckOutHandler = () => {
        navigate('/cart-checkout');
    }; 
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cart.length ? (cart.map((product) => {
                    return (
                        <CartItem key={product.id} cartItem={product}></CartItem>
                    )
                })) : (
                    <span>Your cart is empty.</span>
                )}
            </div>
            <Button className='button-container' onClick={onCheckOutHandler}>Go to checkout</Button>
        </div>
    )
};

export default CartDropdown;

