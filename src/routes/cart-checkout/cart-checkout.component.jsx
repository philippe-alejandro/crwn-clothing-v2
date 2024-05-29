import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cartDropDown.context';
import ArrowButtons from '../../components/arrow-buttons/arrow-buttons.components';
import { ReactComponent as TrashIcon } from '../../assets/trash-icon.svg';
import './cart-checkout.styles.scss';
import TotalPrice from '../../components/total-price/total-price.component';
import React from 'react';

const CartCheckout = () => {
    const { 
        leftArrowRemoveItem, 
        rightArrowAddItem, 
        removeProductTrashIcon,
        cart
    } = useContext(CartDropdownContext);

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
                console.log(item.url)
                return (
                    <div className='cart-checkout-item-container' key={item.id}>
                        <img src={item.imageUrl} alt={`${item.name}`}/>
                        <div className='paragraphs'>
                            <p>{item.name}</p>
                        </div>
                        <div className='paragraphs'>
                            <ArrowButtons clickLeftArrow={() => leftArrowRemoveItem(item.id)} clickRightArrow={() => rightArrowAddItem(item.id)} item={item}/>
                        </div>
                        <div className='paragraphs'>
                            <p>{`$${item.price}`}</p>
                        </div>
                        <div className='paragraphs'>
                            <div className='trash-icon' onClick={() => {removeProductTrashIcon(item.id)}}>
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
