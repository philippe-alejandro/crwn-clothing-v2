import './button.styles.scss';

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

const Button = (props) => {
    const { children, buttonType, onClick } = props;
    return (
        <button className={`${BUTTON_TYPES_CLASSES[buttonType]} button-container`} onClick={onClick}>{children}</button>
    )
}

export default Button;