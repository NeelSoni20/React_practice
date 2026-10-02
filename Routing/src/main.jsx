import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './Compnents/Home/Home.jsx'
import About from './Compnents/About/About.jsx'
import Contact from './Compnents/Contact/Contact.jsx'
import User from './Compnents/User/User.jsx'
import Github from './Compnents/Github/Github.jsx'
import {githubinfoloader} from './Compnents/Github/Github.jsx'

//const router = createBrowserRouter([{ 
//path: '/',
//element: <App />,
//  children: [
//    {
//      path: "",
//      element: <Home />
//    },
//    {
//      path: "About",
//      element: <About />
//    },
//    {
//      path: "Contact",
//      element: <Contact />
//    }
//  ]
//}])
const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path= '/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>

      <Route 
      loader={githubinfoloader}
      path='/ Github' element={<Github/>}
      
      
      />
     </Route> 
  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
