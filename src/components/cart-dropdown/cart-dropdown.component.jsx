import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { CartDropdownContext } from '../../contexts/cartDropDown.context';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = (props) => {
    const { cart } = useContext(CartDropdownContext);
    console.log('Cart:', cart);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cart.map((product) => {
                    return (
                        <CartItem key={product.id} cartItem={product}></CartItem>
                    )
                })}
            </div>
            <Button className='button-container'>Go to checkout</Button>
        </div>
    )
};

export default CartDropdown;

