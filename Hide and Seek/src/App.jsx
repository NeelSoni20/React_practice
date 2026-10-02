import { useState } from "react"
function App() {
    let [HandS, setstring]= useState(false)
  let ShowValue = () => {
    setstring(HandS = "Hello React")
  }
  let HideValue = () => {
    setstring(HandS = "")
  }

        
    

  return (
    <div>
      <h1> Hide and Seek</h1>
      

      <button
      onClick={ShowValue}>
        Show
        </button>
<span> </span>
        <button onClick={HideValue}>Hide</button><br />
<h2>{HandS}</h2>
     

    </div>
  )
} 

export default App  