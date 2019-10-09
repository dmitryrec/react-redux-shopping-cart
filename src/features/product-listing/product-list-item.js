import React from 'react'

export default function ProductListItem(props) {
    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
    return (
        <div className="productListItem">
            <h3>{props.product.name}</h3>
            <img
                height={100}
                width={100}
                title={props.product.name}
                src={`${props.product.image}`}
                alt="product"
            />
            <div>{props.product.description}</div>
            <div>$ {props.product.price}</div>
            <div>
                <button 
                   onClick={()=>props.addToCart(props.product)}>
                    add to cart ({
                        (thisItemInCart && thisItemInCart.quantity) || 0
                    })
                </button>
            </div>
        </div>
    )
}
