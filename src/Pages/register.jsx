import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setRegisterList } from '../Redux/Slices/register';
import { useSelector, useDispatch } from 'react-redux';
import web6 from '../assets/web6.jpg'
import axios from 'axios'


function Register() {
    // const navigate=useNavigate()
    const dispatch = useDispatch()

    const registerGlobalState = useSelector((state) => state.register.registerList)

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const userRegister = () => {

        if (inputValue.name.trim() && inputValue.email.trim() && inputValue.password.trim()) {

            let duplicate = false
            registerGlobalState.map((e) => {
                if (e.email.trim() === inputValue.email.trim()) {
                    duplicate = true

                }
            })
            if (duplicate) {
                alert("This email already exists");
                return;

            }

            else {

                let data = [...registerGlobalState, inputValue]


                const formData = new FormData();
                    formData.append("name",inputValue.name);
                    formData.append("email",inputValue.email);
                    formData.append("password",inputValue.password);

                    axios.post('https://agaram.academy/api/b4/action.php?request=ai_finance_user_register',formData).then((res)=>{
                        console.log(res)
                    })

            }
        }
        else {
            alert("please fill all the details")
        }
    }

    return <div style={
        {
            backgroundImage:`url(${web6})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            height:"750px"
        }
    }>


        <h1 style={{ textAlign:"center"

        }}>Register</h1><br></br>
        <div style={{ backgroundColor: "wheat", width: "500px", marginLeft: "350px", borderRadius: "15px" ,marginLeft:"500px", background:"transparent", boxShadow: "0 0 10px"}}>
            <Form style={{ padding: "45px" }}>
                <Form.Label>Name</Form.Label>
                <Form.Control style={{ marginTop: "10px" }} value={inputValue.name} type="text" placeholder="Enter your name" onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} required  ></Form.Control><br></br>
                <Form.Label>Email</Form.Label>
                <Form.Control style={{ marginTop: "10px" }}  value={inputValue.email} type="email" placeholder="Enter your email" onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} required  ></Form.Control><br></br>
                <Form.Label>password</Form.Label>
                <Form.Control style={{ marginTop: "10px" }} value={inputValue.password} type="password" placeholder="Enter your password" onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} required  ></Form.Control><br></br>
                <br></br>
                <Button variant="dark" style={{marginLeft:"150px"}} onClick={userRegister}>Register</Button>
            </Form>
        </div>

    </div>
}
export default Register
