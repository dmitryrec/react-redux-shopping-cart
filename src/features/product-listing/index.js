import React from 'react';
import ProductListItem from '../product-listing/product-list-item';

const ProductListing = ({products}) => {
    return (
        <div>
            {
                products.map(product=><ProductListItem product={product}/>
            )
            }
        </div>
    );
}

export default ProductListing;
{}