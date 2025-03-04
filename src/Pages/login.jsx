import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

import { setLoginUsers } from '../Redux/Slices/login';



function Login() {

    const financeGlobalState = useSelector((state) => state.login.loginUsers)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
   
    const submit = () => {
                
        if (loginDetails.email === "" || loginDetails.password === "") {
            alert("Please Fill");
            return;
        }
        
        const formData = new FormData();
        formData.append("email", loginDetails.email);
        formData.append("password", loginDetails.password);

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_user_login", formData)
            .then((response) => {
                
                console.log(response);
                
               
                if (response.data.status === "success") {
                  
                    alert("Login Successful");
                    dispatch(setLoginUsers(response.data.data));
                    
                    navigate("/userdetails");
                       
            }
           
            else {
               alert("Email or Password not found, Please Register");
               navigate("/register")
           }
       })
}

return <div>
           
             Email:
        <Form.Control type="email" placeholder="Enter Email " value={loginDetails.email} onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />

        Password:

        <Form.Control type="password" placeholder="Enter Password" value={loginDetails.password} onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />

    <Button variant="success" onClick={submit}>Login</Button>


    </div>
    }
export default Login;


                 
                  
                    
                
            
   
    
















   













