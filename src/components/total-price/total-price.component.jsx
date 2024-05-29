import React from 'react';
import './total-price.styles.scss';

const TotalPrice = (props) => {
    const { cart } = props;
    const totalPrice = cart.reduce((accumulator, item) => {
        const orderPrice = item.price * item.quantity;
        return accumulator + orderPrice;
    }, 0);
    return (
        <div className='total-price-container'>
            <span>{`Total price: $${totalPrice}`}</span>
        </div>
    )
};

export default TotalPrice;