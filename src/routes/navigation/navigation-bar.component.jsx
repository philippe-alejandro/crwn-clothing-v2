import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation-bar.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartDropdownContext } from '../../contexts/cartDropDown.context';

const NavigationBar = () => {
  const { isCartDisplayed, setIsCartDisplayed } = useContext(CartDropdownContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
      await SignOutUser();
      setCurrentUser(null);
    };
    console.log(currentUser);
    const onClickDropdownHandler = () => {
      if (isCartDisplayed) {
        setIsCartDisplayed(false);
      } else {
        setIsCartDisplayed(true);
      }
    };
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
              <CrownLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
              <Link className='nav-link' to='/shop'>
                  SHOP
              </Link>
              {currentUser ? (
                <span className='nav-link' onClick={signOutHandler}>Sign Out</span>
              ) : (
                <Link className='nav-link' to='/authentication'>
                  Sign In
                </Link>
              )}
              <CartIcon onClick={onClickDropdownHandler}/>
            </div>
            {isCartDisplayed && <CartDropdown/>}
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default NavigationBar;