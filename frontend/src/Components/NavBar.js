import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import '../styles/NavBar.css'
import logo from "../images/CareGrid_logo.png"

function NavBar() {

    const [click, setClick] = useState(false);
    const [isLogin,setisLogin] = useState(false) ; 
   return (
    <nav className="nb-parent">
        <div className='nb-child'>
            <a className="nb-part1" href='/home'>
            <img src={logo} alt="" />
                <div>CareGrid</div>
            </a>
            <div className={!click ?"nb-part2":"nb-part21"}>
              <li><a href='/appointment'>Appointment</a></li>
              <li><a href='/beds'>Beds</a></li>
              <li><a href='/medicines'>Medicines</a></li>
              <li><a href='/about' className='green-in'>About</a></li>
              <li><a href='/contact' style={{color:'white'}}>Contact</a></li>
              <li className='nav-btn'>{isLogin ? <Link to={'/profile'}>Profile</Link>: <Link to={'/login'}>Login</Link>}</li>
             
            </div>
            
        </div>
        <div class="hamburger-menu">
                <a href="#" onClick={()=>{setClick(!click)}}>
                    <GiHamburgerMenu />
                </a>
         </div>
    </nav>
  
    
  )
}

export default NavBar
