import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CloseButton, Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import img from '../assets/image4.jpg'
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'


function viewExperts() {

    const [viewExperts, setViewExperts] = useState([])

    useEffect(() => {
        getApi()
    }, [])

    const getApi = () => {
        axios.get('https://agaram.academy/api/b4/action.php?request=ai_finance_get_all_experts')
            .then((res) => {
                let getData = res.data.data
                setViewExperts(getData)
                console.log(getData)
            })

    }

    const sendRequest = (i) => {
        // const formData = new FormData();
        // formData.append("userid", loginDetails.email);
        // formData.append("expertid", loginDetails.password);

        // axios.post("", formData)
        //     .then((response) => {

        //         console.log(response);

        //         if (response.data.status === "success") {
        //             alert("Request Send Successfully");
        //         }
        //         else {
        //             alert("failed")
        //         }
        //     })
        console.log(i+1)
    }


    return <div>
        <h2 style={{ textAlign: "center" }}>Experts Assistance</h2>
        <div style={{ maxWidth: "1300px", maxHeight: "1000px", marginLeft: "100px", marginTop: "50px" }}>
            <Table border={2} striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Designation</th>
                        <th>Current Organization</th>
                        <th>Years of Experience</th>
                        <th>Areas of Expertise</th >
                        <th>Expert Assistance</th>
                    </tr>
                </thead>
                <tbody>
                    {viewExperts.map((v, i) =>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{v.name}</td>
                            <td>{v.contact}</td>
                            <td>{v.email}</td>
                            <td>{v.gender}</td>
                            <td>{v.designation}</td>
                            <td>{v.current_organization}</td>
                            <td>{v.years_of_experience_in_finance}</td>
                            <td>{v.areas_of_expertise}</td>
                            <td><Button variant='success' onClick={()=>sendRequest(i)}>Contact Request</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </div>

    </div>
}

export default viewExperts