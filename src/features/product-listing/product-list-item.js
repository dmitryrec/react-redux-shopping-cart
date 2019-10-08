import React from 'react'

export default function ProductListItem(props) {
    return (
        <div>
            <h3>{props.product.name}</h3>
            <img
                height={100}
                title={props.product.name}
                src={`${props.product.image}`}
                alt="r"
            />
            <div>{props.product.description}</div>
            <div>{props.product.price}</div>
            <div><button>add to cart</button></div>
        </div>
    )
}