import React from 'react'
import App from '../src/components/Name.jsx'
import Gaming from '../src/components/Gaming_laptop.jsx'
import Medium from '../src/components/Meduim_range.jsx'
import Basic_Level from '../src/components/Basic_Level.jsx'



const app = () => {
  return (
    <>
    <div id = "category">
      <Basic_Level laptop = "HP Laptop 14s" 
      specs = "Intel Core i3 or AMD Ryzen 3, 8GB RAM and 256/512GB SSD" 
      price = "₹38,700.00"/>
    </div><br />
    <div id = "category">
      <Medium laptop = "Asus VivoBook 15/16"
      specs = "Intel core i5 or AMD ryzen 5, 16GB RAM and 512GB SSD"
      price = "₹72,990"/>
    </div><br />
    <div id = "category">
      <Gaming laptop= "Lenovo LOQ 15"
      specs = "AMD ryzen 7, 32GB RAM and 1TB SSD, RTX 5060, Graphic Card 6GB"
       price = "₹1,99,990"/>
    </div>
    
    </>

  )
}

export default app

