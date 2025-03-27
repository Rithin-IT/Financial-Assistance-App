

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Card, CloseButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import blue from '../../assets/blue.jpg';
function RegisterExperts() {

    const navigate = useNavigate();

    const [areaofexpertise, setAreaofexpertise] = useState([])

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        contact: "",
        gender: "",
        designation: "",
        current_organization: "",
        years_of_experience_in_finance: "",
        areas_of_expertise: []
    })

    const addexpertiseBtn = () => {
        if (!areaofexpertise.trim()) {
            alert("Please enter an expertise area");
            return;
        }
        setInputValue({ 
            ...inputValue, 
            areas_of_expertise: [...inputValue.areas_of_expertise, areaofexpertise] 
        });
        setAreaofexpertise("");
    };

    const deleteExpertise = (v) => {
        setInputValue({ 
            ...inputValue, 
            areas_of_expertise: inputValue.areas_of_expertise.filter(item => item !== v) 
        });
    };

    const Register = async () => {
        if (!inputValue.name || !inputValue.email || !inputValue.password) {
            alert("All fields are required");
            return;
        }


        const formData = new FormData();
        formData.append("name", inputValue.name);
        formData.append("email", inputValue.email);
        formData.append("password", inputValue.password);
        formData.append("contact", inputValue.contact);
        formData.append("gender", inputValue.gender);
        formData.append("designation", inputValue.designation);
        formData.append("current_organization", inputValue.current_organization);
        formData.append("years_of_experience_in_finance", inputValue.years_of_experience_in_finance);
        formData.append("areas_of_expertise", JSON.stringify(inputValue.areas_of_expertise));

        axios.post('https://agaram.academy/api/b4/action.php?request=ai_finance_expert_register', formData)
            .then((res) => {
                console.log(res)
                alert("Registered Sucessfully");

                setInputValue({
                    name: "", email: "", password: "", contact: "", gender: "",
                    designation: "", current_organization: "", years_of_experience_in_finance: "",
                    areas_of_expertise: []
                });
                navigate('/admin/manageexperts')
            })
    }
    return (
        <div style={{
            backgroundImage:`url(${blue})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            height:"600px"
        }}>
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow-lg" style={{ width: '40rem' }}>
                <h3 className="text-center mb-3">Register Expert</h3>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-2">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={inputValue.name}
                                    onChange={e => setInputValue({ ...inputValue, name: e.target.value })} required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={inputValue.email}
                                    onChange={e => setInputValue({ ...inputValue, email: e.target.value })} required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={inputValue.password}
                                    onChange={e => setInputValue({ ...inputValue, password: e.target.value })} required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-2">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="number" value={inputValue.contact}
                                    onChange={e => setInputValue({ ...inputValue, contact: e.target.value })} required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-2">
                                <Form.Label>Gender</Form.Label>
                                <div>
                                    <Form.Check inline type="radio" label="Male" value="male"
                                        checked={inputValue.gender === "male"}
                                        onChange={e => setInputValue({ ...inputValue, gender: e.target.value })} />
                                    <Form.Check inline type="radio" label="Female" value="female"
                                        checked={inputValue.gender === "female"}
                                        onChange={e => setInputValue({ ...inputValue, gender: e.target.value })} />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-2">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" value={inputValue.designation}
                                    onChange={e => setInputValue({ ...inputValue, designation: e.target.value })} required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-2">
                                <Form.Label>Current Organization</Form.Label>
                                <Form.Control type="text" value={inputValue.current_organization}
                                    onChange={e => setInputValue({ ...inputValue, current_organization: e.target.value })} required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-2">
                                <Form.Label>Experience (years)</Form.Label>
                                <Form.Control type="number" value={inputValue.years_of_experience_in_finance}
                                    onChange={e => setInputValue({ ...inputValue, years_of_experience_in_finance: e.target.value })} required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-2">
                        <Form.Label>Areas of Expertise</Form.Label>
                        <Row>
                            <Col sm="8">
                                <Form.Control type="text" value={areaofexpertise}
                                    onChange={e => setAreaofexpertise(e.target.value.trim())}
                                    placeholder="Enter area of expertise" />
                            </Col>
                            <Col sm="4">
                                <Button variant="dark" onClick={addexpertiseBtn}>Add</Button>
                            </Col>
                        </Row>
                        <ul className="list-unstyled mt-2">
                            {inputValue.areas_of_expertise.map((v, index) => (
                                <li key={index} className="d-flex justify-content-between align-items-center">
                                    {v} 
                                    <CloseButton onClick={() => deleteExpertise(v)} />
                                </li>
                            ))}
                        </ul>
                    </Form.Group>

                    <Button variant="dark" className="w-100 mt-3" onClick={Register}>Register</Button>
                </Form>
            </Card>
        </Container>
        </div>
    );
}

export default RegisterExperts;








