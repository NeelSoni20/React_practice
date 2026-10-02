import React from 'react'
import Products from '../src/Components/Products'


const App = () => {
  return (
    <div>
      <Products name = 'Headphone' category = 'Electronics' price = '₹2199' rating = '8' />
      <Products name = 'Laptop' category = 'Electronics' price = '₹59999' rating = '8.9' />
      <Products name = 'Smartphone' category = 'Electronics' price = '₹21999' rating = '9' />
      <Products name = 'washing Machine' category = 'Electronics' price = '₹17999' rating = '8.5' />
      <Products name = 'Car' category = 'Vehicle' price = '₹150000' rating = '9.6' />
    </div>
  )
}

export default App



