import React from 'react';
import './shop.styles.scss'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import {connect} from "react-redux";
import {addItemToCart} from "../../redux/cart/cart.actions";
import {selectIsLoggedIn} from "../../redux/users/user.selectors";
import {selectShopCollections} from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({addToCart, collections}) => {

    const handleAddItemToCart = (item) => {
        addToCart(item)
    }

    return (
        <div className={'shop-page'}>
            <CollectionsOverview collections={collections} AddItemToCart={handleAddItemToCart}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ( {
    addToCart: (item) => dispatch(addItemToCart(item))
})

const mapStateToProps = state => {
    return {
        isLoggedIn: selectIsLoggedIn(state),
        collections: selectShopCollections(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
