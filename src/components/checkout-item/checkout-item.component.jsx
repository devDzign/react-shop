import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem }) => {


    const { name, imageUrl, price, quantity} = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'
                 onClick={() => removeItem(cartItem)}
            >
                &#10005;
            </div>
        </div>
    );
}

export default CheckoutItem;