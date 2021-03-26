import React, {useState} from 'react';
import './shop.styles.scss'
import SHOP_DATA from '../../utils/shop.data.js'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import {connect} from "react-redux";
import {addItemToCart} from "../../redux/cart/cart.actions";

const ShopPage = ({addToCart}) => {
    const [shop] = useState(
        {
            collections: SHOP_DATA
        }
    )

    const handleAddItemToCart = (item) => {
        addToCart(item)
    }

    return (
        <div className={'shop-page'}>
            {
                shop.collections.map(({items, title, id}) => {
                    return <CollectionPreview key={id} items={ items } title={title} AddItemToCart={handleAddItemToCart}/>
                })
            }

        </div>
    );
};

const mapDispatchToProps = dispatch => ( {
    addToCart: (item) => dispatch(addItemToCart(item))
})

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authenticate.isLoggedIn
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
