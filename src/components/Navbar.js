import React from 'react';
import Logo from '../images/logo.png';

const Navbar = () =>{
    return(
        <>
<header>
<nav className="navbar">
    
    <ul>
        <li><img src={Logo} className="logo" alt="logo"/></li>
    </ul>
  
</nav>
</header>
        </>
    )
}

export default Navbar;