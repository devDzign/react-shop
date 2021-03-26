import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({totalItems, handleClick}) => {
    return (
        <div className="cart-icon" onClick={handleClick}>
            <ShoppingIcon />
            <span className='item-count'>{totalItems}</span>
        </div>
    );
};

export default CartIcon;
