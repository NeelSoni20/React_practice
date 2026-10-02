import React, { useState } from 'react'

const App = () => {
  const [password, setpassword] = useState("")
  const [passhide, setpasshide] = useState(false) 
  const passwordhandle = (e) => {setpassword(e.target.value)}
  const password_hide = () => {

    setpasshide((prev) => !(prev))
    }
  
  
 return (
    <div>
       
      <input type={passhide ? "password" : "text"} value={password} onChange={passwordhandle} placeholder='Password' />    
      <button onClick={password_hide}>{passhide ? "password" : "text"}</button>
      
    </div>
)
}

export default App
