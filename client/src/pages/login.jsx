import React, {useState } from 'react'
import axios from 'axios' ;
import {Link, Navigate, useNavigate}from 'react-router-dom' ;
import './login.css' ;
import Navbar from '../components/navbar';
import pic from './pichome.png' ;


// import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
// import { setLogin } from '../../state';
// import {useDispatch} from 'react-redux' ; 
// import { application } from 'express';


const Login =() => 
{    
    
     return (
   <>
   
<div className='home-main'> 

 <div className='wrapper'>
 <Navbar/>
 <div className = "wrapper-content">
   <div className = "top-left"> 
       <div> 
         <img src ={pic}/>
       </div>
   </div>
   <div className='top-right'> 
      <div> 
        <h1 className='title'> LETS GRIND SMARTLY  </h1>
      </div>
      <div> 
        <p className='para'> 
         A STUDENT DRIVEN PLATFORM  <br/> TO MAKE YOUR LIFE EASY PEASY </p>
      </div>
      <button className = "signbu">SIGN IN</button>
   </div>
</div>
</div>
<div className="home-info"> 
<div className="card">
 <div className="content">
 <p className="heading">COURSES</p>
 <p className="para">
   GET THE RATING AND DETAILS FROM UR SENIORS
  
 </p>
 <button className="btn">Read more</button>
</div>
</div>
<div className="card">
<div className="content">
<p className="heading"> PROFESSORS </p>
<p className="para">
KNOW WHICH PROFESSOR IS STRICT AND WHO IS SUPER CHILL 

</p>
<button className="btn">Read more</button>
</div>
</div>
<div className="card">
<div className="content">
<p className="heading">PROJECTS</p>
<p className="para">
PROJECTS AND RESEARCH WORKS RUNNING IN COLLEGE
</p>
<button className="btn">Read more</button>
</div>
</div>
<div className="card">
<div className="content">
<p className="heading"> RESOURCES </p>
<p className="para">
GET THE BEST NOTES ,PAPERS, ASSIGNMENTS AND BOOKS OF YOUR DESIRED COURSES

</p>
<button className="btn">Read more</button>
</div>
</div>
</div>
</div>



</>
  )
}
       

export default Login ;





 