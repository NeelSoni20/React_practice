import React from 'react'

function Products(product){
    return(
    <div>
        <h2>Product Name: {product.name}</h2>
        <p>Product Category: {product.category}</p>
        <p>Product Price : {product.price}</p>
        <p>Product Rating: {product.rating}</p>     
        </div>
        )
}
export default Products