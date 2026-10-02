import React, { use, useState } from 'react'

const App = () => {
  const [theme, settheme] = useState('Light')
  const togggletheme = () => settheme((currenttheme => currenttheme === 'Light' ? 'Dark' : 'Light'))

  return (
    <>
    <div>
    <div className = {theme === 'Dark' ? 'bg-black text-white min-h-screen p-48' : 'bg-white-50 text-black min-h-screen p-48'}>
      <h2>{theme === 'Light' ? 'light mode 🌞' : '  dark mode 🌛' }</h2>
    <button onClick={togggletheme} className="  mt-2 px-4 py-2 bg-blue-600 text-white rounded ">switch to {theme === 'Light' ? 'Dark' : 'Light'}</button>  
      
    </div>
    </div>
   </> 
  )
} 

export default App
