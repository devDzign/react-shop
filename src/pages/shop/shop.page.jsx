import React from 'react';
import './shop.styles.scss'
import {connect} from "react-redux";
import {addItemToCart} from "../../redux/cart/cart.actions";
import {selectIsLoggedIn} from "../../redux/users/user.selectors";
import {selectCollectionsForPreview, selectShopCollections} from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CategoryPage from "../category/category.page";

const ShopPage = ({addToCart, collections, match}) => {

    const handleAddItemToCart = (item) => {
        addToCart(item)
    }

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                component={() => <CollectionsOverview collections={collections} AddItemToCart={handleAddItemToCart}/>}
            />
            <Route
                path={`${match.path}/:category`}
                component={CategoryPage}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addToCart: (item) => dispatch(addItemToCart(item))
})

const mapStateToProps = state => {
    return {
        isLoggedIn: selectIsLoggedIn(state),
        collections: selectCollectionsForPreview(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
