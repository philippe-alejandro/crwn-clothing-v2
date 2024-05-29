import { ReactComponent as LeftArrow } from '../../assets/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../assets/arrow-right.svg';
import './arrow-buttons.styles.scss';
import React from 'react';

const ArrowButtons = (props) => {
    const {clickLeftArrow, clickRightArrow, item} = props;
    return (
    <div className='arrow-buttons-container'>
        <span className='left-arrow-container' onClick={clickLeftArrow}>
            <LeftArrow className='arrow-icon'/>
        </span>
        <span className='arrow-quantity-container'>
            <p>{item.quantity}</p>
        </span>
        <span className='right-arrow-container' onClick={clickRightArrow}>
            <RightArrow className='arrow-icon'/>
        </span>
    </div>
    )
};

export default ArrowButtons;