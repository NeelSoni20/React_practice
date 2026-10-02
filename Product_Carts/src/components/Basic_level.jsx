import React from 'react'

function Basic_Level(basic) {
  return(
    <div id ="bankai">
    <h1>Basic_Level Laptops::</h1>
    <h2>Laptop_Name:{basic.laptop}</h2>
    <h3>Laptop_Specs:{basic.specs}</h3>
    <h3>Laptop_price:{basic.price}</h3>
    </div>
  )
  
}
export default Basic_Level
