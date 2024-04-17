import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './css/userdetails.css'


function ExistUserDetails() {
    const [data , setData] = useState(null);
    // const userNamer = localStorage.getItem('name');
    useEffect(() => {
        getsingledata();
    },[]
    )
    const getsingledata =()=>{axios.get(`http://127.0.0.1:8000/api/existRegister/${name}`)
    .then((res)=> {
        if(res.status === 200){
          setData(res.data.data);
            
            
        }
    })
}
    return (
        <div>
            <h1>Your Details</h1>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>City</th>
                        <th scope='col'>Vehicle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((registered, index) => (
                        <tr key={index}>
                            <td>{registered.name}</td>
                            <td>{registered.age}</td>
                            <td>{registered.city}</td>
                            <td>{registered.vehicle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default ExistUserDetails
