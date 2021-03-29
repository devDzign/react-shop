import React from 'react';
import './collection-item.styles.scss'
import {CustomButton} from "../index";

const ItemCollection = ({item,addItem}) => {
  const {name, price, imageUrl} = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted> Add to Cart </CustomButton>
        </div>
    );
};

export default ItemCollection;