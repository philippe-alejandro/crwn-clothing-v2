import Button from "../button/button.component";
import './product-card.styles.scss';
import { CartDropdownContext } from "../../contexts/cartDropDown.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
    const { price, name, imageUrl } = product;
    const { addItemToCart } = useContext(CartDropdownContext);

    const onAddProductHandler = () => {
        addItemToCart(product);
    };

    return  (
        <div className='product-card-container'>
            <img src={`${imageUrl}`} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`$${price}`}</span>
            </div>
            <Button onClick={onAddProductHandler} buttonType='inverted'>Add to Cart</Button>
        </div>    
    ) 
};

export default ProductCard;