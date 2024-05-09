import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react'

const CartIcon = ({ onClick }) => {
    const { cart } = useContext(CartContext);
    return (
        <div className='cart-icon-container' onClick={onClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cart ? cart.length : 0}</span>
        </div>
    )
};

export default CartIcon;
