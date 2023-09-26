import React, { useState } from 'react';
import { BiSolidUserCircle, BiSolidUser, BiLogoGmail } from 'react-icons/bi';
import { FaHospital } from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri'
import axios from 'axios'
import '../styles/LoginScreen.css';
// import docimage from './Screenshot.png';
import { Link } from 'react-router-dom';
import { GiConwayLifeGlider } from 'react-icons/gi';


function LoginScreen() {

  const [email , setEmail] = useState();
  const [password,setPassword] = useState();

  async function login(){
    const user ={ email ,password};

    try{
      // const login_details = (await axios.post('http://localhost:5000/api/users/login', user )).data;
      // setEmail(login_details.email);
      // setPassword(login_details.password)

      console.log(email);
      console.log(password);
      // localStorage.setItem('currentUser' , JSON.stringify(login_details));
        //console.log(currentUser)
        window.location.href = '/'
    }
    catch(error){
      console.log(error);
    }
  }



  const [bool,setBool]=useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  return(
  <>
    <div className='lg-parent'>
      <div className='lg-child'>
        <div className='lg-child1'>
          <h2 className='lg-heading'> {isSignup ? "Signup To Your Account!" : "Login To Your Account!"} </h2>
          {isSignup && (
            <div className='lg-input-icons'>
              <BiSolidUser className='lg-iconinput'/> 
              <input className='lg-input-field' value={inputs.name} type="text" required placeholder='Enter Name'/> </div> 
          )}
            
          <div className='lg-input-icons'>
            <BiLogoGmail className='lg-iconinput'/>
            {(bool) ? <input className='lg-input-field' type="text" placeholder='registered id'/>:<input className="lg-input-field" type="text" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />}
          </div> 
          <div className='lg-input-icons'>
            <RiLockPasswordFill className='lg-iconinput'/>
            <input className='lg-input-field' type="text" placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }}/>
          </div>
          {isSignup && (
            <div className='lg-input-icons'>
              <RiLockPasswordFill className='lg-iconinput'/> 
              <input className='lg-input-field' type="text" required placeholder='Confirm Password'/> </div> 
          )}
          <div className='lg-div2'> 
            <BiSolidUserCircle onClick={()=>setBool(false)} className='lg-icon'/><p className='text'>Patient</p>
            <FaHospital onClick={()=>setBool(true)} className='lg-icon'/><p className='text'>Hospital</p>
            {!isSignup && (
            <Link className="lg-text1" to='/'>Forgot Password?</Link>
            )}
          </div>
          {isSignup ? <button className='lg-button'> SignUp </button> : <button onClick={login} className='lg-button'> Login </button>}

          <br />
          {!isSignup && ( <p className='lg-text2'>Not Registered Yet? <Link className='lg-text1' onClick={() => setIsSignup(true)}> Sign-Up</Link></p>)}
          {isSignup && ( <p className='lg-text2'><Link className='lg-text1' onClick={() => setIsSignup(false)}> Back </Link></p>)}
        </div>
        <div className='lg-child2'>
          <img className='lg-image' src="" alt="" />
          
        </div>
      </div>
    </div>
  </>   
  )

}
export default LoginScreen
