import React from 'react'

const App = () => {
  const URL =   "https://jsonplaceholder.typicode.com/users"
  let getfacts = async() => {
    console.log("getting data.......")
    let response = await fetch(URL)
  console.log(response)
  }
  return (
    <div>
    </div>
  )
}

export default App
