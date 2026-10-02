import { useState } from "react"
function App() {
    let [counter, setcounter]= useState("")
  let Increment = () => {
    setcounter(counter +1)
  }
  let Decrement = () => {
    setcounter(counter -1)
  }
  let Decrement_5 = () => {
    setcounter(counter - 5)
  }
  if(counter<0){
    setcounter(counter = 0) 
  }

        
    

  return (
    <div>
      <h1> Power</h1>
      <h2>Power Level:⚡{counter}</h2>

      <button
      onClick={Increment}>
        Increment
        </button>
<br />
        <button onClick={Decrement}>Decrement</button><br />
        <button onClick={Decrement_5}>Decrement by 5</button>

      

    </div>
  )
}   

export default App