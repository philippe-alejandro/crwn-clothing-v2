import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { CartDropdownContext } from '../../contexts/cartDropDown.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = (props) => {
    const { cart } = useContext(CartDropdownContext);
    const navigate = useNavigate();
    const onCheckOutHandler = () => {
        navigate('/cart-checkout');
    }; 
    console.log('Cart:', cart);
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

