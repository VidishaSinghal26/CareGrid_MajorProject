import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import './NavBar.css'

function NavBar() {

    const [click, setClick] = useState(false);
    const [isLogin,setisLogin] = useState(false) ; 
   return (
    <nav className="parent">
        <div className='child'>
            <a className="part1" href='/home'>
            <img src="/images/logo.png" alt="" />
                <span>CareGrid</span>
            </a>
            <ul className={!click ?"part2":"part21"}>
              <li><a href='/appointment'>Appointment</a></li>
              <li><a href='/beds'>Beds</a></li>
              <li><a href='/medicines'>Medicines</a></li>
              <li><a href='/about' className='green-in'>About</a></li>
              <li><a href='/contact' >Contact</a></li>
            </ul>
        </div>
            <div class="hamburger-menu">
                <a href="#" onClick={()=>{setClick(!click)}}>
                    <GiHamburgerMenu />
                </a>
            </div>
            <button className='nav-btn'>{isLogin ? "Profile":"Login"}</button>
        </nav>
  
    
  )
}

export default NavBar
