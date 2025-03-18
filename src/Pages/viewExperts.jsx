import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CloseButton, Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'


function viewExperts() {

    const [viewExperts, setViewExperts] = useState([])
    const [user_id, setUserId] = useState()

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

    const sendRequest = (id) => {

        const formData = new FormData();
        formData.append("user_id",user_id );
        formData.append("expert_id",id );

        console.log(formData);

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_expert_request", formData)
            .then((response) => {

                console.log(response);

                if (response.data.status === "success") {
                    alert("Request Send Successfully");
                }
                else {
                    alert("failed")
                }
            })
        
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
                    {viewExperts.map((v,i) =>
                        <tr>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.contact}</td>
                            <td>{v.email}</td>
                            <td>{v.gender}</td>
                            <td>{v.designation}</td>
                            <td>{v.current_organization}</td>
                            <td>{v.years_of_experience_in_finance}</td>
                            <td>{v.areas_of_expertise}</td>
                            <td><Button variant='success' onClick={()=>sendRequest(v.id)}>Contact Request</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </div>

    </div>
}

export default viewExperts