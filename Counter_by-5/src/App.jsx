import React, { useState } from 'react'

const App = () => {
  let [counter, setcounter] = useState(0)
  const count_add_5 = () => {
    setcounter(counter +=5)
  }
  const count_sub_5 = ()=> {
    setcounter(counter -=5)
  }
  const count_0 = () => {
    setcounter(counter = 0)
  
  }
  if(counter < 0){
    counter = 0 
  }
  return (
    <>
    <div>
      <h1>Counter by 5</h1>
      <button onClick={count_add_5}>ADD 5</button>
      <div><p>{counter}</p></div>
      <button onClick={count_sub_5}>SUB 5</button><br />
      <button onClick={count_0}>Reset</button>
      
      
    </div>
    </>
  )
}

export default App
