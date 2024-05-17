import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartDropdownContext } from '../../contexts/cartDropDown.context';
import { useContext } from 'react'

const CartIcon = ({ onClick }) => {
    const { totalProductsInCart } = useContext(CartDropdownContext);

    return (
        <div className='cart-icon-container' onClick={onClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{totalProductsInCart ? totalProductsInCart : 0}</span>
        </div>
    )
};

export default CartIcon;
