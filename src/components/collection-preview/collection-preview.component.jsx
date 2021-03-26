import React from 'react';
import './collection-preview.styles.scss'
import ItemCollection from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items, AddItemToCart }) => {
    return (
        <div className={'collection-preview'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(
                            (item) => {
                                return <ItemCollection key={item.id} item={item} addItem={AddItemToCart}/>
                            }
                        )
                }
            </div>
        </div>
    );
};

export default CollectionPreview;