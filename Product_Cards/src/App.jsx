import Product_cards from "./components/Product_cards";
import React from 'react'
import { useState } from "react";

const App = () => {
  let [add , addcart]= useState(0)

  let cart = () => {
    addcart(add + 1)
    console.log(add)
  }

  return (
    <>
    <div>
      <Product_cards Name = "Desktop" price ="₹180000" category="Electronics" rating= "10"/> 
      <button onClick={cart} id="add">Add to Cart: </button>
    </div>
     <div>
      <Product_cards Name = "Lapop" price ="₹210000" category="Electronics" rating= "8.9"/> 
      <button onClick={cart} id="add">Add to Cart: </button>
    </div>
     <div>
      <Product_cards Name = "Headphone" price ="₹2000" category="Electronics" rating= "7.6"/> 
      <button onClick={cart} id="add">Add to Cart: </button>
    </div>
     <div>
      <Product_cards Name = "Xioami" price ="₹25000" category="Electronics" rating= "9"/> 
      <button onClick={cart} id="add">Add to Cart: </button>
    </div>

    <h2 id ="cart">Cart🛒: {add}</h2>
    </>
  )
}

export default App
