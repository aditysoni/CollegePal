import logo from './logo.svg';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import LoginForm from './pages/loginform';
import Courses from './pages/courses';
import Professors from './pages/professors';
import Professordetail from './pages/professordetail';
import Project from './pages/projects';
import Oneproject from './pages/oneproject';

import { useEffect } from 'react';
import Cookies from 'js-cookie' ;
import axios from 'axios' ;

function App() {

  return (
    <>

<div className='App' >
         <Router>
         <Routes>
         
            <Route path="/register" element={<Register/>} />
            <Route exact path= "/" element = {<Login/>} />
            <Route path = '/courses' element ={<Courses/>} />
            <Route path = '/professors' element ={<Professors/>} />
            <Route path = "/professors/:id" element ={<Professordetail/>} />
            <Route path = '/projects' element = {<Project/>} />
            <Route path = "/projects/:id" element = {<Oneproject/>} />
         </Routes>
       </Router>,
      
       </div>
    </>
  );
}

export default App;

















