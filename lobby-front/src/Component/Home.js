// Home.js
import React from 'react';
import './css/home.css';
import ReactHelmet from 'react-helmet';
import { Link } from 'react-router-dom';


function Home() {
  // const token = localStorage.getItem('token');
  const token = sessionStorage.getItem('token');
  return (
    // <ReactHelmet>
    //   <title>Lobby Management</title>
    // </ReactHelmet>
   
    <div className="homecontainer">
      <h1 className="heading">Welcome to Lobby Management</h1>
      <p className="pagedescription">Lobby management systems streamline the process of receiving, organizing,
       and dispatching vehicles within a designated area. This can be crucial for businesses dealing with various vehicle types,
       ensuring smooth operations and efficient utilization of space.</p>
      {token ? (
        <a className='wellcome-user'>"Wellcome User"</a>
      ):(
        <div className='button-box'>
        <Link to="/existlogin"><button className="loginbutton">Login</button></Link>
        <Link to="/register"><button className="registerbutton">Register</button></Link>
        </div>
      )}
      
    </div>
  );
}

export default Home;
