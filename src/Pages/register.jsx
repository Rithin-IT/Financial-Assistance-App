import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import{useState} from "react";
import{useNavigate} from "react-router-dom";

import { setRegisterList } from '../Redux/Slices/register';
import { useSelector,useDispatch } from 'react-redux';


function Register(){
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const registerGlobalState=useSelector((state)=>state.register.registerList)

    const[inputValue,setInputValue]=useState({
        name:"",
        email:"",
        password:"",
        phonenumber:""
    })
    const userRegister=()=>{

        if(inputValue.name && inputValue.email && inputValue.password && inputValue.phonenumber){ 

      let duplicateValue=false
      registerGlobalState.map((e) =>{ 
            if(e.email === inputValue.email){
                duplicateValue=true

            }
        })
        if (duplicateValue) {
            alert("This email already exists");
            return;
        
        }

        else{

            let data = [...registerGlobalState,inputValue]
            dispatch(setRegisterList(data));
            console.log(data)

           alert("ok")
           setInputValue({name:"",email:"",password:"",phonenumber:""})
        navigate('/login')
        }
    }
    else{
        alert("please fillup")
    }
}

    return <div>


        <h1>Register</h1>
        Name
        <Form.Control type="text" placeholder="enter your name" onChange={(e)=>setInputValue({...inputValue,name:e.target.value})} ></Form.Control> 
        Email
        <Form.Control type="text" placeholder="enter your email" onChange={(e)=>setInputValue({...inputValue,email:e.target.value})} ></Form.Control> 
        Password
        <Form.Control type="text" placeholder="enter your password" onChange={(e)=>setInputValue({...inputValue,password:e.target.value})} ></Form.Control>
        phonenumber
        <Form.Control type="text" placeholder="enter your phonenumber" onChange={(e)=>setInputValue({...inputValue,phonenumber:e.target.value})} ></Form.Control> 



        <Button variant="primary" onClick={userRegister}>Register</Button>

    </div>
}
export default Register