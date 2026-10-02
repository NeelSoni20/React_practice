import React, { useState } from 'react'

export default function App() {
  const [Number_1, setNumber_1] = useState("")
  const [Number_2, setNumber_2] = useState("")
  const [Total, setTotal] = useState("")
  const [Operator, setOperator] = useState("")

  const calc = (number) => 
  {
    if(Operator === "")
      {
      setNumber_1(Number_1 + number)
      }
    else
    {
      setNumber_2(Number_2 + number)
    }
  }
  const calculator =() =>
  {
    const num1 = Number(Number_1)
    const num2 = Number(Number_2)
    let result
    
    switch(true){
      case(Operator==='+'):
        return result = num1 + num2 
        break
      case(Operator==='-'):
        return result = num1 - num2
        break
      case(Operator==='*'):
        return result = num1 * num2
        break
      case(Operator==='/'):
        return result = num1 / num2

    }
    console.log(result)
    setNumber_1("")
    setNumber_2("")
    setOperator("")
    setTotal(result)
  }


  return (
    <div>
      <h1>Simple Calc</h1>
      <h2>First Number: {Number_1}</h2>
      <h2>Second Number: {Number_2}</h2>
      <h2>Total: {Total}</h2>
        <button onClick={() => calc("1")}>1</button>
        <button onClick={() => calc("2")}>2</button>
        <button onClick={() => calc("3")}>3</button><br />
        <button onClick={() => calc("4")}>4</button>
        <button onClick={() => calc("5")}>5</button>
        <button onClick={() => calc("6")}>6</button><br />
        <button onClick={() => calc("7")}>7</button>
        <button onClick={() => calc("8")}>8</button>
        <button onClick={() => calc("9")}>9</button><br />
        <button onClick={() => calc("0")}>0</button>
      
      <br /><br />
      <button onClick={() => setOperator("+")} >+</button>
      <button onClick={() => setOperator("-")}>-</button>
      <button onClick={() => setOperator("*")}>*</button>
      <button onClick={() => setOperator("/")}>/</button>
      <button onClick={() => setTotal(calculator)}>=</button><br />
       
    </div>

      )
}
 