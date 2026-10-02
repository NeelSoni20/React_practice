import React, { useState } from 'react'

const App = () => {
  let [data, setdata] = useState(false)
  let show = () => {
    setdata(data = "Product Description.")
  }
  let hide = () => {
    setdata(data ='')

  }
  return (
    <div>
        <h2>Product Detail</h2><button onClick={show}>For Detail</button>
        <button onClick={hide}>Hide Detail</button>
        <h3>{data}</h3>
    </div>
  )
}

export default App
