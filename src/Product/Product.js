import React, {Component} from 'react';

const Product = (props) => {
    return (
        <div>
            <p>{props.productId}</p>
            <p>{props.productName}</p>
            <p>{props.productPrice}</p>
        </div>
    )
}

export default Product;