import React, { useState } from 'react';

function Navbar() {
    const [setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={""}>
            <a href='/' className='logo'>
                <img src="img/RPS2.jpg" alt=''/> 
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className=' nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='/register'>Login/Register</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
