import React, {useState} from 'react';
import './shop.styles.scss'
import SHOP_DATA from '../../utils/shop.data.js'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
    const [shop] = useState(
        {
            collections: SHOP_DATA
        }
    )

    return (
        <div className={'shop-page'}>
            {
                shop.collections.map(({items, title, id}) => {
                    return <CollectionPreview key={id} items={ items } title={title} />
                })
            }

        </div>
    );
};

export default ShopPage;
