import React from 'react';
import ProductListItem from '../product-listing/product-list-item';

const ProductListing = ({products}) => {
    return (
        <div>
            {
                products.map(product=>
                <div key={Math.random()}>
                    <ProductListItem product={product}/>
                </div>
            )
            }
        </div>
    );
}

export default ProductListing;
