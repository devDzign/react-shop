import React from 'react';
import './cart-dropdown.styles.scss'
import {CartItem, CustomButton} from "../index";
import {useHistory} from "react-router-dom";

const CartDropdown = ({cartItems}) => {
    const history = useHistory();
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                }}
            >
                Checkout
            </CustomButton>

        </div>
    );
};

export default CartDropdown;
