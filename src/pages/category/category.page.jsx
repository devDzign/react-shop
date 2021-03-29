import React from 'react';
import './category.styles.scss'
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import {ItemCollection} from "../../components";
import {addItemToCart} from "../../redux/cart/cart.actions";

const CategoryPage = ({ collection, addToCart }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <ItemCollection key={item.id} item={item} addItem={addToCart} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.category)(state)
});

const mapDispatchToProps = dispatch => ({
    addToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
