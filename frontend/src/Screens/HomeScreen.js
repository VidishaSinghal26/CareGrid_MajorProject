import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import'../styles/HomeScreen.css'
import NavBar from '../Components/NavBar'
import doctors from "../images/doctor-bg.png"
import design1 from '../images/design1.png'
import design2 from '../images/design2.png'
import design3 from '../images/design3.png'

function HomeScreen() {

    
    return (
     <>
     
     <div className='main' >
        <div className='sec1'>
          <NavBar />
          <div className="inner">
            <div className="first">
            <h2>We'll Ensure You Always Get The Best Result</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae quaerat officia nesciunt iure, deleniti facilis, recusandae doloribus dolores voluptate voluptates placeat provident vero molestias quis sequi harum!</p>
            <button>Patient <span>&#8594;</span></button>
            <button>Hostipal <span>&#8594;</span></button>

            </div>
            <img className="design1" src={design1} alt="" />
            <img className="design2" src={design2} alt="" />
            <img className="design3" src={design3} alt="" />
            <div className="second">
              <img className="doctors" src={doctors} alt="" />
            </div>
          </div>
        </div>
        <div className='sec2'>
          <h1>The Best Quality Services You Can Get</h1>
          <div className="inner">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
            
        </div>
        <div className='sec3'>
            
        </div>
        <div className='sec4'>
            
        </div>
        <div className='sec5'>
            
        </div>
     </div>
    </>
  )
}

export default HomeScreen
