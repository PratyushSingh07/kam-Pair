import React from 'react'
import './Main.css'
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import img from './search.png'
function Main() {
//  const history=useHistory()
//   const nextpage=()=>{
//     history.push({
//       pathname: '/result',
//       state: search
//     });
//   }

    const[search,setSearch]=useState("");
  return (
    <div>
         <div className="container">
  <form action="" className="search-bar">
    <input type="text" placeholder="Start Comparing" name="q" value={search} onChange={(e)=>setSearch(e.target.value)} />
  
  
   <Link to={{
    pathname: '/result',
    state: { 
       data: {search}
    },
  }}>   
   <button ><img src={img} alt="" /></button>

   
   </Link>
    



  </form>
  

</div>

    </div>
  )
}

export default Main 