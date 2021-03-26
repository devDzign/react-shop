import React from 'react';
import './cart-dropdown.styles.scss'
import {CustomButton} from "../index";

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-icon'>
            </div>
            <CustomButton>Checkout</CustomButton>

        </div>
    );
};

export default CartDropdown;
