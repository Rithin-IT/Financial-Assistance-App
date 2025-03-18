import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';


function ExpertLogin() {

    const [userExpert,setUserExpert]=useState({
        email:"",
        password:""
    })

    const submit=()=>{
        if (userExpert.email === "" || userExpert.password === "") {
            alert("Please Fill");
            return;
        }
        console.log(userExpert)
        const formData = new FormData();
        formData.append("email", userExpert.email);
        formData.append("password", userExpert.password);

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_expert_login", formData)
            .then((response) => {
                
                console.log(response);

                if (response.data.status === "success") {    
                    alert("Login Successful");    
            }
            
       })

    }


    return <div>
        <h2 style={{textAlign:"center"}}>Welcome to expert Login</h2>
        <div style={{border:"10px solid burlywood" , borderRadius:"15px", width:"500px", padding:"25px", marginLeft:"530px", marginTop:"90px"}}>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setUserExpert({...userExpert,email:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" onChange={(e)=>setUserExpert({...userExpert,password:e.target.value})} />
            </Form.Group>
            <Button type="button" style={{marginLeft:"160px"}} onClick={submit}> submit </Button>
        </Form>
        </div>
    </div>
}

export default ExpertLogin