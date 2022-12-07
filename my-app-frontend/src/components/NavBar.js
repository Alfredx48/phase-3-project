import React from 'react'
import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
   <div >
     <NavLink className="link" exact to = "/"> Homepage </NavLink>
     <NavLink className="link" to = "/books"> books </NavLink>
     <NavLink className="link" to = "/best_books"> Best Books </NavLink>
   </div>
  )
}

export default NavBar