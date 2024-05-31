import './cart-item.styles.scss';
import React from 'react';
import { ReactComponent as TrashIcon } from '../../assets/trash-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductTrashIcon } from '../../store/cart/cart.action';
import { selectorCartItems } from '../../store/cart/cart.selector';

const CartItem = (props) => {
  const { imageUrl, price, name, quantity, id } = props.cartItem;
  const dispatch = useDispatch();
  const cart = useSelector(selectorCartItems);
  const removeProduct = (items, id) => {
    dispatch(removeProductTrashIcon(items, id));
  };
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {`${quantity} x $${price}`}
        </span>
      </div>
      <div className='trash-icon-cart-item'>
        <div className='trash-icon-container' onClick={()=>{removeProduct(cart, id)}}>
          <TrashIcon/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;