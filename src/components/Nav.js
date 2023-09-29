import React from "react";
import {Link} from'react-router-dom'
const Nav=()=>{
    return(
        <div>
    <nav class="navbar">
        <div>
           <Link to='/wprentals'>Wprentals</Link>
        </div>
        <ul>
           
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/demos'>Demos</Link>
            </li>
            <li>
                <Link to='/properties'>Properties</Link>
            </li>
            <li>
                <Link to='/owners'>Owners</Link>
            </li>
            <li>
                <Link to='/features'>Features</Link>
            </li>
            <li>
                <Link to='/pages'>Pages</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
            
            
            
        </ul>
        
    </nav>
   
    </div>
    
    )
}
export default Nav;