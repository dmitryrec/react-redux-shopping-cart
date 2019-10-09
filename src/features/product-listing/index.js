import React from 'react';
import ProductListItem from '../product-listing/product-list-item';
import { connect } from 'react-redux';
import { cartItemsWithQuantities  } from '../cart'

const ProductListing = (props) => {
    return (
        <div>
            {
                props.products.map(product =>
                    <div key={Math.random()}>
                        <ProductListItem
                            product={product}
                            addToCart={props.addoToCart}
                            cart={cartItemsWithQuantities(props.cart)}
                        />
                    </div>
                )
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
};

function mapDispatchToProps(dispatch) {
    return {
        addoToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);

