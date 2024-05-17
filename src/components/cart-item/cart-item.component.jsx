import './cart-item.styles.scss';
import { useContext } from 'react';  
import { CartDropdownContext } from '../../contexts/cartDropDown.context';
import { ReactComponent as TrashIcon } from '../../assets/trash-icon.svg';

const CartItem = (props) => {
  const { imageUrl, price, name, quantity, id } = props.cartItem;
  const { cart, setCart } = useContext(CartDropdownContext);

  console.log('cart:', cart.at(0).id);
  const onClickTrashIcon = () => {
    console.log('inside onClickTrashIcon');
    const cartUdated = cart.filter((item) => {
      return item.id !== id;
    });
    console.log('cartUdated:', cartUdated);
    setCart(cartUdated);
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
        <div className='trash-icon-container' onClick={onClickTrashIcon}>
          <TrashIcon/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;