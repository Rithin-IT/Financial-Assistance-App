import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

import { setLoginUsers } from '../Redux/Slices/login.js';



function Login() {

    const loginGlobalState = useSelector((state) => state.login.loginUsers);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
   
    const submit = () => {
                
            
        const formData = new FormData();
        formData.append("email", loginDetails.email);
        formData.append("password", loginDetails.password);

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_user_login", formData)
            .then((response) => {
                
                console.log(response);
                
               
                if (response.data.status === "success") {
                  
                    alert("Login Successful");
                    dispatch(setLoginUsers(response.data));
                    navigate("/userdetails");
                  
                    
                
               
            }
             else {
                alert("Invalid Credentials");
            }
        })
}
   
    
















    return <div>
              
        Email:
        <Form.Control type="email" placeholder="Enter email id"
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














