import React from 'react'
import { useState } from 'react'

const Product = ({product, price}) => {
    let [count, setcount] = useState(1)

  let increment = () => {
    setcount(count + 1)
    }

  let decrement = () => {
    setcount(count-1)
  }
  if(count < 0){
    count = 0
  }
 
  
  return (
    <>
    <div>
      <p>Product :  {product}</p>
      <p>Price:  {price}</p>
      <button onClick={increment}>+</button><p>Quantity : {count}</p><button onClick={decrement}>-</button>
      <p>Total : {count*price} </p>
      
    </div>
    
    </>
  )
}

export default Product
