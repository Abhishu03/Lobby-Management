import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './css/userlogin.css';
import axios from 'axios';

function Userlogin() {
  const navigate = useNavigate();
  const rnavigate = useNavigate();
  
  const location = useLocation();
    const { name, age, city, vehicle } = location.state || {};
  
  const [password, setPassword] = useState('');

  const submitDetails = (e) => {
    e.preventDefault();
    
    axios.post('http://127.0.0.1:8000/api/login', { name, password })
      .then((response) => {
        if (response.status === 200) {
          navigate('/Usersdetails');
          setPassword('');
        }
      })
      .catch((error) => {
        console.log(error);
      });

       axios.post('http://127.0.0.1:8000/api/register', { name, age, city, vehicle })
            .then((response) => {
                if (response.status === 200) { 
                } else {
                  
                  console.log("Error");
                }
            }).catch((error) => {
                console.log(error);
            });
            // rnavigate(0);
  };

  return (
    <div className='container'>
      <h1 className='head'>Add your password</h1>
      <form>
        <div className='name-box'>
          <label className='nameLable' htmlFor='name'>Name:</label>
          <h3 className='userNameFromRegister'
            type='text'
            id='name'
            required
          >{name ? name : "name not found"}</h3>
        </div>
        <div className='passwordbox'>
          <label className='passwordlable' htmlFor='password'>Password:</label>
          <input
            className='userPassword'
            type='password' 
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            id='password'
            required
          />
        </div>
        <button type='submit' onClick={submitDetails}>Submit</button> 
      </form>
    </div>
  );
}

export default Userlogin;
