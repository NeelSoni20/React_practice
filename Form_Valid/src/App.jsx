import React from 'react'
import { useState } from 'react'

const App = () => {
  let [name, setname] = useState("")
  let [email, setemail] = useState("")
  let [pass, setpass] = useState("")
  let [issubmit, setissubmit] = useState(false)
  let [error , seterror] = useState("")
  let handlname = (e) => {setname(e.target.value)}
  let handlemail = (e) => {setemail(e.target.value)}
  let handlpass = (e) => {setpass(e.target.value)}    
  let errorhandle = () =>{
    if(name.trim() === "" || pass.trim() === "" || email.trim()=== "" ){
      seterror("Error! Field is Empty")
      
    }else{
      seterror("Login Succecfully") 
    }
  }
  let handlesubmit = (e) => {
    e.preventDefault()
    setissubmit(true)
    errorhandle()
  }
  
    return (

    <div>
      <form onSubmit={handlesubmit}>
        <label>Enter Name: </label>
        <input type="text" value={name} onChange={handlname} placeholder='Name'  /><br />
        <label>Enter Mail: </label>
        <input type="text" value={email} onChange={handlemail} placeholder='Email' /><br />
        <label>Enter Password: </label>
        <input type="password   " value={pass} onChange={handlpass} placeholder='Password' /><br />
        <button type='submit'>Submit</button>
        {error &&<p>{error}</p>}
        {error &&<p>{name} and {email}</p>}
      </form>
    </div>
  )
}

export default App
