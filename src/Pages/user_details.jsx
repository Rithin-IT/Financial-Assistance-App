import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserlist } from '../Redux/Slices/userDetails';
import img from '../assets/image4.jpg'


function UserDetails() {

    const userGlobalState = useSelector((state) => state.userDetails)

    const dispatch = useDispatch()

    const [inputvalue, setInputValue] = useState({
        fatherName: "",
        motherName: "",
        DoB: "",
        gender: "",
        maritalStatus: "",
        spouseName: "",
        spouseWorkingCompany: "",
        spouseYearlySalary: "",
        children: "",
        currentWorkingCompany: "",
        salary: "",
        workExperience: "",
        workingHours: "",
        workingShift: "",
        yearlySalaryHike: "",
        monthlyExpense: "",
        monthlySaving: "",
        assets: "",
        education: [],
        skills: [],
        languages: [],
        goals: ""
    })

    const submitBtn = () => {
        let sendData = [...userGlobalState.userDataList, inputvalue]
        dispatch(setUserlist(sendData))
        console.log(sendData)
    }



    return <div style={
        {
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundAttachment: "revert",
            backgroundRepeat: "no-repeat",
            height:"900px"
        }}>
        <Container>
        <h3 style={{textAlign:"center"}}>Personal Details</h3>

            <Form>
                <Row>
                    <Col sm="6">
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">Father Name</Form.Label>
                            <Col sm="6">
                                <Form.Control 
                                style={{backgroundColor:"inherit",color:"wheat"}}
                                type="text" 
                                placeholder="Enter Father Name" 
                                onChange={(e) => setInputValue({ ...inputvalue, fatherName: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Mother Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Mother Name" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, motherName: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Date of Birth</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Date of Birth" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, DoB: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="3">
                                <Form.Label column sm="3" >Gender</Form.Label>
                                </Col>
                                <Col sm="3">
                                <Form.Check type="radio" label="Male" value="Male"
                                onChange={(e) => setuserInputValue({...userInputValue,gender:e.target.value})} />
                                </Col>
                                <Col sm="2">
                                <Form.Check type="radio" label="female" value="female"
                                onChange={(e) => setuserInputValue({...userInputValue,gender:e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="3">
                                <Form.Label column sm="3" >Marital Status</Form.Label>
                                </Col>
                                <Col sm="3">
                                <Form.Check type="radio" label="Male" value="Male"
                                onChange={(e) => setuserInputValue({...userInputValue,gender:e.target.value})} />
                                </Col>
                                <Col sm="2">
                                <Form.Check type="radio" label="female" value="female"
                                onChange={(e) => setuserInputValue({...userInputValue,gender:e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Spouse Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Spouse Name" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, spouseName: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Spouse Working Company</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Spouse Working Company" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, spouseWorkingCompany: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Spouse Yearly Salary</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Spouse Yearly Salary" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, spouseYearlySalary: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Children</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Children" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, children: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Current Working Company</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Current Working Company" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, currentWorkingCompany: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Salary</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Salary" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, salary: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Work Experience</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Work Experience" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, workExperience: e.target.value })} />
                            </Col>
                        </Form.Group>
                       
                    </Col>





                    <Col sm="6">
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Working Hours</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Working Hours" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, workingHours: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Working Shift</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Working Shift" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, workingShift: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Yearly Salary Hike</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Yearly Salary Hike" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, yearlySalaryHike: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Monthly Expense</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Monthly Expense" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, monthlyExpense: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Monthly Savings</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Monthly Savings" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, monthlySaving: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Value of Assets</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Assets" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, assets: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <h3>Education</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Course Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Course Name" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Course Institute</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Course Institute"
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                 onChange={(e) => setInputValue({ ...inputvalue, fatherName: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Course Year</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Course Year" 
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                onChange={(e) => setInputValue({ ...inputvalue, fatherName: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Course Percentage</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Course Percentage"
                                 style={{backgroundColor:"inherit",color:"wheat"}}
                                 onChange={(e) => setInputValue({ ...inputvalue, fatherName: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <h3>Skills</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="2">
                                    <Form.Label>Skills</Form.Label>
                                </Col>
                                <Col sm="6">
                                    <Form.Control type="text" placeholder=" Enter Skills" 
                                     style={{backgroundColor:"inherit",color:"wheat"}} />
                                </Col>
                                <Col sm="2">
                                    <Button variant='dark'>Add</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <h3>Languages</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="2">
                                    <Form.Label>Languages</Form.Label>
                                </Col>
                                <Col sm="6">
                                    <Form.Control type="text" placeholder="Enter Languages" 
                                     style={{backgroundColor:"inherit",color:"wheat"}}/>
                                </Col>
                                <Col sm="2">
                                    <Button variant='dark'>Add</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <h3>Goals</h3>
                <Button onClick={submitBtn} variant='dark' size='lg' style={{marginLeft:"575px"}}>Submit</Button>
            </Form>
        </Container>
    </div>
}

export default UserDetails