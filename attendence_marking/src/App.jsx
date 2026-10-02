import React, { useState } from 'react'

const App = () => {
  let [students, setstudents] = useState([
    { id: 1, name: 'Motu', status: 'Absent' },
    { id: 2, name: 'Patlu', status: 'Absent' },
    { id: 3, name: 'Chhota Bheem', status: 'Absent' },
    { id: 4, name: 'Chutki', status: 'Absent' },
  ])
const togglestatus = (id) => {
  setstudents((prev) => 
                prev.map((student) =>
                 student.id === id ? {
                ...student,
                status: student.status === 'Present' ? 'Absent' : 'Present' }
                : student
              )
            )
          }   
  return (
    <div> 
      <h2>Student Attendence:</h2>
      <ol>{students.map((student) => (
        <li   >
          <span style={{ minWidth: '120px' }}>{student.name}</span>
      
    <button onClick={() => {togglestatus(student.id)}}>
      (  {student.status})
    </button>
    </li>
      ))}
    </ol>
     </div>
  )
}

export default App
