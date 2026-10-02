import React,{useState} from 'react'


const App = () => {
  const [price, setprice] = useState("")
  const [discount, setdiscount] = useState("")
  const [total, settotal] = useState(null)
  
  let handlesubmit = (e) => {
    e.preventDefault()
    
    let discounttotal =  price * (discount/100)
    let finaltotal = price - discounttotal
    settotal(finaltotal)
  }
  let pricehandle = (e) => {setprice(e.target.value)}  
  let discounthandle = (e) => {setdiscount(e.target.value)}
  
    
  return (
    <div>
      <form onSubmit={handlesubmit}>
              Price :<input type="text" value={price} onChange={pricehandle} placeholder='Price' /><br />
        Discount(%):<input type="text" value={discount} onChange={discounthandle} placeholder='Discount' /><br />
        <button type='submit'> Total </button>
        {total !== null && <p> Final Total: ₹{total}</p>}
      </form>
    </div>
  )
}

export default App
