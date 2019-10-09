import React, { Component, Fragment } from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/products.json';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <ProductListing products={data.products}/>
            </div>

        )
    }
}