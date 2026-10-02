import React from 'react'

function Product_card(Product_cards){
  return (
    <>
    <div>
        <h1>Name : {Product_cards.Name}</h1>
        <h2>Price: {Product_cards.price}</h2>
        <h3>category: {Product_cards.category}</h3>
        <h3>rating:{Product_cards.rating}</h3>
    </div>
        </>
  )
}

export default Product_card
