import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { setRegisterList } from '../Redux/Slices/register';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios'


function Register() {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const registerGlobalState = useSelector((state) => state.register.registerList)

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const userRegister = () => {

       
        const formData = new FormData();
        formData.append("name", inputValue.name);
        formData.append("email", inputValue.email);
        formData.append("password", inputValue.password);

        axios.post('https://agaram.academy/api/b4/action.php?request=ai_finance_user_register', formData).then((res) => {
            console.log(res)
            alert("Registered Sucessfully");
           
            setInputValue({ name: "", email: "", password: "" });
            navigate('/login');
        })
        
    }
    return <div>

        <h2>Register</h2>

        <Form.Label>Name</Form.Label>
        <Form.Control style={{ marginTop: "10px" }} value={inputValue.name} type="text" placeholder="Enter your name" onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} required  ></Form.Control><br></br>
        <Form.Label>Email</Form.Label>
        <Form.Control style={{ marginTop: "10px" }} value={inputValue.email} type="email" placeholder="Enter your email" onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} required  ></Form.Control><br></br>
        <Form.Label>password</Form.Label>
        <Form.Control style={{ marginTop: "10px" }} value={inputValue.password} type="password" placeholder="Enter your password" onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} required  ></Form.Control><br></br>
        <br></br>
        <Button variant="dark" style={{ marginLeft: "150px" }} onClick={userRegister}>Register</Button>


    </div>
    }
export default Register
                
            

            

               
        



        




    

    