import React, { useState } from 'react';
import axios from 'axios';
import './css/register.css'; 
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Userregister() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [vehicle, setVehicle] = useState('');


    const nextDetails = (e) => {
        e.preventDefault();
        if(age >= 18 ){
            navigate('/login', {
                state: {
                    name,
                    age,
                    city,
                    vehicle,
                },
            });
        }else{
            alert('your age should be grater then 18');
        }
       
        // axios.post('http://127.0.0.1:8000/api/register', { name, age, city, vehicle })
        //     .then((response) => {
        //         if (response.status === 200) {
                    
        //             navigate('/login');
        //             setName('');
        //             setAge('');
        //             setCity('');
        //             setVehicle('');
        //         } else console.log("Error");
        //     }).catch((error) => {
        //         console.log(error);
        //     });
    }

    


    return (
        <div className="container">
            <h1>Add a User</h1>
            <form>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' onChange={(event) => setName(event.target.value)} value={name} id="name" required />
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input type='number' onChange={(event) => setAge(event.target.value)} value={age} id="age" required />
                </div>
                <div>
                    <label htmlFor='city'>City:</label>
                    <input type='text' onChange={(event) => setCity(event.target.value)} value={city} id="city" required />
                </div>
                <div>
                    <label htmlFor='vehicle'>Vehicle:</label>
                    <input type='text' onChange={(event) => setVehicle(event.target.value)} value={vehicle} id="vehicle" required />
                </div>
                <button onClick={nextDetails}>Next</button>
            </form>
        </div>
    )
}

export default Userregister;
