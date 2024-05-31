import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation-bar.styles.scss';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorIsCartDisplayed } from '../../store/cart/cart.selector';
import { setIsCartIsDisplayed } from '../../store/cart/cart.action';

const NavigationBar = () => {
  const isCartDisplayed = useSelector(selectorIsCartDisplayed);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const onClickDropdownHandler = () => {
    if (isCartDisplayed) {
      dispatch(setIsCartIsDisplayed(false));
    } else {
      dispatch(setIsCartIsDisplayed(true));
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
              <span className='nav-link' onClick={SignOutUser}>Sign Out</span>
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