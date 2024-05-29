import './cart-item.styles.scss';
import { useContext } from 'react';  
import { CartDropdownContext } from '../../contexts/cartDropDown.context';
import React from 'react';
import { ReactComponent as TrashIcon } from '../../assets/trash-icon.svg';

const CartItem = (props) => {
  const { imageUrl, price, name, quantity, id } = props.cartItem;
  const { removeProductTrashIcon } = useContext(CartDropdownContext);

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
        <div className='trash-icon-container' onClick={()=>{removeProductTrashIcon(id)}}>
          <TrashIcon/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;