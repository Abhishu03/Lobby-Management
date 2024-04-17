import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './css/navbaar.css';

function Navbar() {
  // const token = localStorage.getItem('token');
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();
  const refreshpage = () => {
   navigate(0);
  }

  function RemoveReload () {
    // localStorage.removeItem('token') ;
    sessionStorage.removeItem('token') ;
    refreshpage();
  }
 
  return (
    <div className='narbarboddy'>
      <ul className='navbarlinkgroup'>
        <li className='navhome'><Link to="/">Home</Link></li>
        {token ? (
          <>
            <li className='navdetails'><Link to="/Usersdetails">Details</Link></li>
            <li>
              <Link to="/" onClick={RemoveReload}  >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li className='navregister'><Link to="/existlogin" >Login</Link></li>
        )}
        <li className='navregister'><Link to="/fungame" >FunGame</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
