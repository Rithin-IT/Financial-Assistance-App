import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserlist } from '../Redux/Slices/userDetails';
import img from '../assets/image4.jpg'
import InputGroup from 'react-bootstrap/InputGroup';


function UserDetails() {

    const userGlobalState = useSelector((state) => state.userDetails)

    const [skillsValue, setSkillsValue] = useState([])

    const [languageValue, setLanguageValue] = useState([])

    const [educationValue, setEducationValue] = useState({
        course_name: "",
        course_institute: "",
        course_year: "",
        course_percentage: ""
    })

    const [userGoal,setUserGoal] = useState([])

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
        goals: []
    })

    // useEffect (()=>{
    //     getApi()
    // },[])

    const submitBtn = () => {
        let sendData = [...userGlobalState.userDataList, inputvalue]
        dispatch(setUserlist(sendData))
        console.log(inputvalue)

    //     const formData = new FormData();
    //                 formData.append("user_id",4);
    //                 formData.append("data",JSON.stringify(userInputValue))

    //                 axios.post('https://agaram.academy/api/b4/action.php?request=ai_carrier_update_user_profile',formData).then((res)=>{
    //                 console.log(res)
    //                 });
    // }

    // const getApi = ()=>{
    //     axios.get('https://agaram.academy/api/b4/action.php?request=ai_carrier_update_user_profile',formData).then((res)=>{
    //         console.log(res)
    //     })
    }

    const addSkillsBtn = () => {
        if (skillsValue == "") {
            alert("please enter value")
        }
        else {
            let x = [skillsValue]
            let y = [...inputvalue.skills, ...x]

            setInputValue({ ...inputvalue, skills: y })
            setSkillsValue("")
        }
    }

    const addLanguageBtn = () => {
        if (languageValue == "") {
            alert("please enter value")
        }
        else {
            let x = [languageValue]
            let y = [...inputvalue.languages, ...x]

            setInputValue({ ...inputvalue, languages: y })
            setLanguageValue("")
        }

    }

    const addEducationValue = () => {
        if (educationValue.course_name == "" || educationValue.course_institute == "" || educationValue.course_year == "" || educationValue.course_percentage == "") {
            alert("please enter value")
        }
        else {
            let x = [educationValue]
            let y = [...inputvalue.education, ...x]

            setInputValue({ ...inputvalue, education: y })
            setEducationValue({
                course_name: "",
                course_institute: "",
                course_year: "",
                course_percentage: ""
            })
        }

    }

    const addGoalBtn = ()=>{
        if(userGoal == ""){
            alert("please Enter Value")
        }
        else{
            let x = [userGoal]
            let y = [...inputvalue.goals, ...x]

            setInputValue({...inputvalue,goals:y})
            setUserGoal("")
        }
    }



    return <div style={
        {
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundAttachment: "revert",
            backgroundRepeat: "no-repeat",
            height: "1050px"
        }}>
        <Container>
            <h2 style={{ textAlign: "center" }}>Personal Information</h2>

            <Form style={{ border: "5px solid white", padding:"20px"}}>
                <Row>
                    <Col sm="6">
                        <h3>Personal Details</h3>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">Father Name</Form.Label>
                            <Col sm="6">
                                <Form.Control
                                    style={{ backgroundColor: "inherit" }}
                                    type="text"
                                    placeholder="Enter Father Name"
                                    onChange={(e) => setInputValue({ ...inputvalue, fatherName: e.target.value })} />
                            </Col>  
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Mother Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Mother Name"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, motherName: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Date of Birth</Form.Label>
                            <Col sm="6">
                                <Form.Control type="date" placeholder="Enter Date of Birth"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, DoB: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="3">
                                    <Form.Label column sm="3" >Gender</Form.Label>
                                </Col>
                                <Col sm="3" className='mt-2'>
                                    <Form.Check type="radio" label="Male" value="male"
                                        checked={inputvalue.gender == "male"}
                                        onChange={(e) => setInputValue({ ...inputvalue, gender: e.target.value })} />
                                </Col>
                                <Col sm="2" className='mt-2'>
                                    <Form.Check type="radio" label="female" value="female"
                                         checked={inputvalue.gender == "female"}
                                        onChange={(e) => setInputValue({ ...inputvalue, gender: e.target.value })} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="3">
                                    <Form.Label column sm="3" >Marital Status</Form.Label>
                                </Col>
                                <Col sm="3" className='mt-2'>
                                    <Form.Check type="radio" label="Married" value="married"
                                        checked={inputvalue.maritalStatus == "married"}
                                        onChange={(e) => setInputValue({ ...inputvalue, maritalStatus: e.target.value })} />
                                </Col>
                                <Col sm="2" className='mt-2'>
                                    <Form.Check type="radio" label="Single" value="single"
                                        checked={inputvalue.maritalStatus == "single"}
                                        onChange={(e) => setInputValue({ ...inputvalue, maritalStatus: e.target.value })} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Spouse Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Spouse Name"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, spouseName: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Spouse Working Company</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Spouse Working Company"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, spouseWorkingCompany: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Spouse Yearly Salary</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Spouse Yearly Salary"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, spouseYearlySalary: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Children</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Children"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, children: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Current Working Company</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Current Working Company"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, currentWorkingCompany: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Salary</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Salary"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, salary: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Work Experience</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Work Experience"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, workExperience: e.target.value })} />
                            </Col>
                        </Form.Group>

                    </Col>


                 


                    <Col sm="6">
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Working Hours</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Working Hours"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, workingHours: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Working Shift</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Working Shift"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, workingShift: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Yearly Salary Hike</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Yearly Salary Hike"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, yearlySalaryHike: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Monthly Expense</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Monthly Expense"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, monthlyExpense: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Monthly Savings</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Monthly Savings"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, monthlySaving: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Value of Assets</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Assets"
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, assets: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <h3>Education</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Course Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Course Name"
                                    style={{ backgroundColor: "inherit" }} value={educationValue.course_name}
                                    onChange={(e) => setEducationValue({ ...educationValue, course_name: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Course Institute</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Course Institute"
                                    style={{ backgroundColor: "inherit" }} value={educationValue.course_institute}
                                    onChange={(e) => setEducationValue({ ...educationValue, course_institute: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Course Year</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Course Year"
                                    style={{ backgroundColor: "inherit" }} value={educationValue.course_year}
                                    onChange={(e) => setEducationValue({ ...educationValue, course_year: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="3">
                                    <Form.Label>Course Percentage</Form.Label>
                                </Col>
                                <Col sm="5">
                                    <Form.Control type="number" placeholder="Enter Course Percentage"
                                        style={{ backgroundColor: "inherit" }} value={educationValue.course_percentage}
                                        onChange={(e) => setEducationValue({ ...educationValue, course_percentage: e.target.value })} />
                                </Col>
                                <Col sm="2">
                                    <Button onClick={addEducationValue} variant='dark' >Add</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <h3>Skills</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="2">
                                    <Form.Label>Skills</Form.Label>
                                </Col>
                                <Col sm="6">
                                    <Form.Control type="text" value={skillsValue}
                                        onChange={(e) => setSkillsValue(e.target.value)} placeholder=" Enter Skills"
                                        style={{ backgroundColor: "inherit" }} />
                                </Col>
                                <Col sm="2">
                                    <Button variant='dark' onClick={addSkillsBtn}>Add</Button>
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
                                    <Form.Control type="text" placeholder="Enter Languages" value={languageValue}
                                        onChange={(e) => setLanguageValue(e.target.value)}
                                        style={{ backgroundColor: "inherit" }} />
                                </Col>
                                <Col sm="2">
                                    <Button onClick={addLanguageBtn} variant='dark' >Add</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                
                <div>
                    <h3 style={{textAlign:"center"}}>Goals</h3>
                    <Form.Group as={Row} className="mb-3 mt-4" style={{marginLeft:"350px"}}>
                        <Row>
                            <Col sm="1">
                            <InputGroup.Text>
                                1.
                            </InputGroup.Text>
                            </Col>
                            <Col sm="6">  
                                <Form.Control type='text'
                                onChange={(e)=>setUserGoal(e.target.value)}
                                 value={userGoal} />                  
                            </Col>
                            <Col sm= "4">
                                <Button variant='dark' onClick={addGoalBtn}>Add</Button>
                            </Col>
                        </Row>
                    </Form.Group>  
                      
                        
                          

                </div>

                <Button onClick={submitBtn} variant='dark' size='lg' style={{ marginLeft: "595px" }}>Submit</Button>
            </Form>
        </Container>
    </div>
}

export default UserDetails