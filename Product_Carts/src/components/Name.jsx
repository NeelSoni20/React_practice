function App(props) {
  return (
  
    <div>
        <h1>Hello, I am {props.username}</h1>
        <h1>I am {props.age} old</h1>
        <h1>Currently i am pursuing {props.course}</h1>
    </div>
  )
}

export default App
  