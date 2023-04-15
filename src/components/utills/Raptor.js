import React from 'react'
import {NavLink,Link} from "react-router-dom"
const Raptor = () => {
  return (
    <div >
     <NavLink to ={"/products"} style={{textDecoration:"none",color:"black"}} ><button   style={{padding:"10px"}}>GO SHOPPING</button></NavLink>
    </div>
  )
}

export default Raptor
