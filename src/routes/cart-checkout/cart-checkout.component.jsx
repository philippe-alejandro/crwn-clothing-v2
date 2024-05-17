import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cartDropDown.context';
import ArrowButtons from '../../components/arrow-buttons/arrow-buttons.components';
import { ReactComponent as TrashIcon } from '../../assets/trash-icon.svg';
import './cart-checkout.styles.scss';
import TotalPrice from '../../components/total-price/total-price.component';

const CartCheckout = () => {
    const { cart, setCart } = useContext(CartDropdownContext);
    
    const onClickLeftArrow = (id) => {
        const cartUpdated = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        });
        setCart(cartUpdated);
    };

    const onClickRightArrow = (id) => {
        const cartUpdated = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item;
        });
        setCart(cartUpdated);
    };

    const onClickTrashIcon = (id) => {
        const cartUpdated = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(cartUpdated.filter((item) => item !== null));
        console.log('updated Cart:',cart);
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
                console.log(item.url)
                return (
                    <div className='cart-checkout-item-container' key={item.id}>
                        <img src={item.imageUrl} alt={`${item.name}`}/>
                        <div className='paragraphs'>
                            <p>{item.name}</p>
                        </div>
                        <div className='paragraphs'>
                            <ArrowButtons clickLeftArrow={() => onClickLeftArrow(item.id)} clickRightArrow={() => onClickRightArrow(item.id)} item={item}/>
                        </div>
                        <div className='paragraphs'>
                            <p>{`$${item.price}`}</p>
                        </div>
                        <div className='paragraphs'>
                            <div className='trash-icon' onClick={() => {onClickTrashIcon(item.id)}}>
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
