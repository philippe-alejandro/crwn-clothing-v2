import ArrowButtons from '../../components/arrow-buttons/arrow-buttons.components';
import { ReactComponent as TrashIcon } from '../../assets/trash-icon.svg';
import './cart-checkout.styles.scss';
import TotalPrice from '../../components/total-price/total-price.component';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { selectorCartItems } from '../../store/cart/cart.selector';
import { leftArrowRemoveItem, rightArrowAddItem, removeProductTrashIcon } from '../../store/cart/cart.action';

const CartCheckout = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectorCartItems);

    const leftArrowRemove = (items, itemId) => {
        dispatch(leftArrowRemoveItem(items, itemId));
    };

    const rightArrowAdd = (items, itemId) => {
        dispatch(rightArrowAddItem(items, itemId));
    };

    const removeProduct = (items, itemId) => {
        dispatch(removeProductTrashIcon(items, itemId));
    };

    return (
        <div className='cart-checkout-container'>
            <div className='titles-container'>
                <p>Product</p>
                <p>Description</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Remove</p>
            </div>
            {cart.map((item) => {
                return (
                    <div className='cart-checkout-item-container' key={item.id}>
                        <img src={item.imageUrl} alt={`${item.name}`}/>
                        <div className='paragraphs'>
                            <p>{item.name}</p>
                        </div>
                        <div className='paragraphs'>
                            <ArrowButtons clickLeftArrow={() => leftArrowRemove(cart, item.id)} clickRightArrow={() => rightArrowAdd(cart, item.id)} item={item}/>
                        </div>
                        <div className='paragraphs'>
                            <p>{`$${item.price}`}</p>
                        </div>
                        <div className='paragraphs'>
                            <div className='trash-icon' onClick={() => {removeProduct(cart, item.id)}}>
                                <TrashIcon/>
                            </div>
                        </div>
                    </div>
                )
                })
            }
            <TotalPrice cart={cart}/>
        </div>
    )
};

export default CartCheckout;
