import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import {setloginUsers} from '../Redux/Slices/login';



function Login() {

    const registerGlobalState=useSelector((state)=>state.register.registerList)
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
    const submit = () => {

        registerGlobalState.forEach((user) => {
            
            if (user.email == loginDetails.email && user.password == loginDetails.password) {
                alert("Login Successfull")
                navigate('/userdetails')
            }
        })
    }








    return<div>
Email:
        <Form.Control type="email" placeholder="Enter emailid" 
        value={loginDetails.email} 
        onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />

        Password:
        <Form.Control type="password" placeholder="Enter password" 
        value={loginDetails.password} 
        onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />

    <Button variant="success" onClick={submit}>Login</Button>
    </div>
}
export default Login;
