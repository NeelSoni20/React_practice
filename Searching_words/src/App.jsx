import React, { useState } from 'react'

const App = () => {
  const [searchitem, setsearchitem] = useState("");
  const items = ["Apple", "Mango", "Banana", "Guava", "Pineapple", "Grapes", "Sapota"];
  const searchfilteritem = searchitem === " " ? [] : items.filter((items)=>items.toLocaleLowerCase().includes(searchitem.toLocaleLowerCase()))
  return (
    <div>
      <h2>Search Filter</h2>
      <div>
      <input type="text" value={searchitem} onChange={(e) => setsearchitem(e.target.value)}placeholder='search_fuits'/>
      <ul>{searchfilteritem.map((items, index) => (
        <li key={index} >{items}</li>
      )
      )}</ul>
    </div>
    </div>
  )
}
export default App
//import { useState } from "react";
//
//function App(){
//  const [search,setSearch] = useState("")
//
//  const items = ["Apple","Mango","Banana","Guava","Pineapple"];
//
//  const filteredItems = search === "" ? [] : items.filter((item) => item.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
//
//  return (
//    <div>
//      <h2>Search Filter</h2>
//      <div>
//        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."/>
//        <ul>{filteredItems.map((item,index) => (
//          <li key={index}>{item}</li>
//        ))}</ul>
//      </div>
//    </div>
//  )
//}
//
//export default App;