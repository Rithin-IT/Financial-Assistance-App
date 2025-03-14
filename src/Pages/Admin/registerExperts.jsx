

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
function RegisterExperts() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

   

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleRegister = async () => {
        if (!inputValue.name || !inputValue.email || !inputValue.password) {
            alert("All fields are required");
            return;
        }


    // //     const formData = new FormData();
    // //     formData.append("name", inputValue.name (https://inputvalue.name/));
    // //     formData.append("email", inputValue.email (https://inputvalue.email/));
    // //     formData.append("password", inputValue.password);

    // //     axios.post (https://axios.post/)('https://agaram.academy/api/b4/action.php?request=ai_finance_user_register', formData).then((res) => {
    // //         console.log(res)
    // //         alert("Registered Sucessfully");

    //         setInputValue({ name: "", email: "", password: "" });
    //         navigate('/login');
   
    


    }
    return <div>
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="p-4 shadow-lg" style={{ width: '30rem' }}>
                <h2 className="text-center mb-4">Register Experts</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" 
                            value={inputValue.name} 
                            onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" 
                            value={inputValue.email} 
                            onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" 
                            value={inputValue.password} 
                            onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} required />
                    </Form.Group>

                    <Button variant="dark" className="w-100" onClick={handleRegister}>Register</Button>
                </Form>
            </Card>
        </Container>

        {/* <Button variant="dark" style={{ marginLeft: "150px" }} onClick={Register}>Register</Button> */}
    </div>
}

export default RegisterExperts