import React, { useState } from 'react'
export default function App() {
  
  const [Task, setTask] = useState("")
  const [Tasks, setTasks] = useState([])

 

  const addTask = () => {
    if(Task.trim() === "") return
   setTasks([...Tasks,Task])
    setTask("")
  }
  const removeTask = (index) => {
    const updatedTasks = Tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks)
  }
  return (
    <>
    <div>
      
      <input  
        type="text" 
          value={Task} 
            onChange = {(e) => setTask(e.target.value) } 
              placeholder='Add Task Here'/>
      <button   onClick={addTask} >Add Task</button>
      <h3>Task.{Tasks.length}</h3>
       <ol style={{backgroundColor: 'grey'}}>
        
        {Tasks.map((t, index) => (
          <li className='bgcolor-grey-600'

           key={index} onClick={() => removeTask(index)}
           style={{cursor: 'pointer',
            backgroundColor :'grey',
            color: 'black'
           }
           }>
            {t}         
          </li>
        ))}
      </ol> 
     
    </div>
    
    </>
  )
}

