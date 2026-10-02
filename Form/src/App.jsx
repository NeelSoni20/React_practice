import { useState } from 'react'
import React from 'react'
import './index.css'

function App() {
const [mail, setmail] = useState("")
const [pass, setpass] = useState("")
const [islogin, setislogin] = useState(false)
function handlemail(e){setmail(e.target.value)}
function handlepass(e){setpass(e.target.value)}
const handlesubmit = (e) => {
  e.preventDefault()
  setislogin(true)
}
  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handlesubmit}>
      <label>Email: </label>
      <input type='mail' value={mail} onChange={handlemail} placeholder='Email'/><br />
      <label >Password: </label>
      <input type="password" value={pass} onChange={handlepass} placeholder='Password' /><br />
      <button type='submit' value={islogin}>Submit</button>
      </form>
      <h2> </h2>

    </div>
  )
}

export default App