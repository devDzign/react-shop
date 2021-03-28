import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import {addItemToCart, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";



const CheckoutPage = ({ cartItems, total, clearItemFromCart, addItemCart, removeItemCart }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id}
                          cartItem={cartItem}
                          clearItem={clearItemFromCart}
                          removeItem={removeItemCart}
                          addItem={addItemCart}
            />
        ))}
        <div className='total'>TOTAL: {total} €</div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const mapDispatchToProps = dispatch => ( {
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    removeItemCart: (item) =>dispatch(removeItem(item)),
    addItemCart: (item) =>dispatch(addItemToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
