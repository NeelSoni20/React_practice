import React from 'react'
import {Outlet,Route,Routes} from "react-router-dom";
import Header from './Compnents/Header/Header.jsx'
import Home from './Compnents/Home/Home.jsx'
import Footer from './Compnents/Footer/Footer.jsx'


const App = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
    
   </>
  )
}

export default App

