import React from 'react'
import { useState } from 'react'

const App = () => {
  let [name, setname] = useState("")
  let [issubmit, setissubmit] = useState(false)
  let handlename = (e) => {setname(e.target.value)}
  const handlesubmit = (e) =>{
    e.preventDefault()
  setissubmit(true) }
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <label>Enter Name: </label>
      <input type="text" value={name} onChange={handlename} placeholder='Name' /><br />
      <button type='submit'>Submit</button>
      {issubmit && <p>Hello {name}</p>}
      </form>
    </div>
    
  )
}

export default App
