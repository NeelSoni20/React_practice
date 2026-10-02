  import React, { useState } from 'react'

  const App = () => {
    let [theme, settheme] = useState("")
    const themeclasses =  {
      Red: 'bg-red-600 text-white min-h-screen p-48',
      Blue: 'bg-blue-600 text-white min-h-screen p-48',
      Green: 'bg-green-600 text-white min-h-screen p-48'
      }  
      const activecolor = themeclasses[theme] || 'bg-white text-black'
    

    
    
    return (
        <div className={`${activecolor} min-h-screen p-12 transition-colors duration-200`} >
        <h2 className='bg-'>Color:</h2>
        <button onClick={()=>settheme('Red')} className="  mt-2 px-4 py-2 bg-pink-600 text-white rounded ">Red</button> <br />
        <button onClick={()=>settheme('Green')}className="  mt-2 px-4 py-2 bg-pink-600 text-white rounded ">Green</button><br />
        <button onClick={()=>settheme('Blue')} className="  mt-2 px-4 py-2 bg-pink-600 text-white rounded ">Blue</button><br />
      </div>
    )
  }

  export default App



