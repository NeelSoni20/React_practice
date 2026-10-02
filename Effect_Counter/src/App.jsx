import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setcounter] = useState(0)
  const Counter = () => {
      setcounter((prevcount) => prevcount + 1)
   }
    useEffect(()=>{
    console.log("Counter Changed!", count)
  })
  return (
    <div>
    <h2>Counter With Efffect</h2>      
    <button onClick={Counter}>HIT</button>
    <h2>Counter:{count}</h2>
    </div>
  )
}

export default App
