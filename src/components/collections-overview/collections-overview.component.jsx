import React from 'react';
import './collections-overview.styles.scss'
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({collections, AddItemToCart}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({items, title, id}) => {
                    return <CollectionPreview key={id} items={ items } title={title} AddItemToCart={AddItemToCart}/>
                })
            }
        </div>
    );
};

export default CollectionsOverview;
