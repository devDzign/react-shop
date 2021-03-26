import React from 'react';
import './cart-dropdown.styles.scss'
import {CartItem, CustomButton} from "../index";

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButton>Checkout</CustomButton>

        </div>
    );
};

export default CartDropdown;
