import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/userdetails.css'

function Usersdetails() {
    const [data, setData] = useState([]);
    // const token = localStorage.getItem('token');
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();
    
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get('http://127.0.0.1:8000/api/registered',{
            headers:{
              'Authorization': `Bearer ${token}`
            }
          })
            .then((response) => {
                setData(response.data.userData);
            })
            .catch((error) => {
                navigate('/existlogin')
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <h1>Users Details</h1>
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

export default Usersdetails;
