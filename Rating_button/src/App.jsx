import React, { use, useState } from 'react'

const App = () => {
  let [rate, setrate] = useState(0)
  const rating_1 = () =>{setrate(rate = "1")}
  const rating_2 = () =>{setrate(rate = "2")}
  const rating_3 = () =>{setrate(rate = "3")}
  const rating_4 = () =>{setrate(rate = "4")}
  const rating_5 = () =>{setrate(rate = "5")}
  return (

    
    <div>
       <h2>Rating Button: </h2>
      <button onClick={rating_1}>&#9733;</button>&nbsp;
      <button onClick={rating_2}>&#9733;</button>&nbsp;
      <button onClick={rating_3}>&#9733;</button>&nbsp;
      <button onClick={rating_4}>&#9733;</button>&nbsp;
      <button onClick={rating_5}>&#9733;</button>&nbsp;
      <p>Overall Rating is: {rate}</p>
    </div>
  )
}

export default App
