import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './css/existuserlogin.css';



function Login_page() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [password , setPassword] = useState('');

    const passwordChange= (event) => {
        setPassword(event.target.value);
    }
  const nameChange = (event)=>{
    setName(event.target.value);
    
  }
  const submitDetails = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/existlogin' , {name , password}).then((response)=>{
       if(response.status === 200) {
         navigate('/')
        //  localStorage.setItem('token' , response.data.token)
        sessionStorage.setItem('token' , response.data.token)
      }
       else console.log("error");
    }).catch(
        (e) => {
            console.log(e);
        }
    )
  }
  

  function Password_data() {
  }
  return (
    
    <div className='pageallcontent'>
    <div className='databox'>
    <h3 className='heading3' > LOGIN  PAGE </h3>

<form >  
<div className='individual'>
<h4 className='username'> USERNAME</h4>  
<input type="text" onChange={nameChange} value={name} placeholder="Enter your name"/>  
</div>
<div className='individual'>
<h4 className='password'> PASSWORD</h4>  
<input type="password" onChange={passwordChange} value={password} placeholder="Enter your password"/><br/>
</div>
<input  style={{"margin":"20px"}} onClick={submitDetails} type="submit" value="Login"/>  


</form>  
    </div>
    </div>

    
  )
}

export default Login_page
