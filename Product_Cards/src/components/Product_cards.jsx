import React from 'react'

function Product_card(Product_cards){
  return (
    <>
    <div id = "Bankai">
        <h1 id = "side">Name : {Product_cards.Name}</h1>
        <h2 id = "side">Price: {Product_cards.price}</h2>
        <h3 id = "side">category: {Product_cards.category}</h3>
        <h3 id = "side">rating:{Product_cards.rating}</h3>
    </div>
        </>
  )
}

export default Product_card
