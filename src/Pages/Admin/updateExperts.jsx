import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

function UpdateExperts() {
    const [viewExperts,setViewExperts] = useState([])

    useEffect(() => {
        getApi()
    }, [])

    const getApi = () => {         
        axios.get('https://agaram.academy/api/b4/action.php?request=ai_finance_get_all_experts')
            .then((res) => {
                if(res.data.data.data){
                    const getData = JSON.parse(res.data.data.data);
                    setViewExperts(getData)
                console.log(res)
                }
               
            })
    }
    return <div>
        <h2 style={{textAlign:"center"}}>Experts Assistance</h2>
        <div style={{maxWidth:"1000px", maxHeight:"1000px",marginLeft:"250px",marginTop:"50px"}}>
            <Table border={2}  striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Designation</th>
                        <th>Current Orgaization</th>
                        <th>Years of Experience</th>
                        <th>Areas of Expertise</th >
                    </tr>
                </thead>
                <tbody>
                viewExperts.map((expert, index) => (
                <tr>
                               <td>{index + 1}</td>
                                <td>{expert.name}</td>
                                <td>{expert.contact}</td>
                                <td>{expert.email}</td>
                                <td>{expert.gender}</td>
                                <td>{expert.designation}</td>
                                <td>{expert.current_organization}</td>
                                <td>{expert.years_of_experience}</td>
                                <td>{expert.areas_of_expertise}</td>
                    
                </tr>
                ))
                
            </tbody>
            </Table>
           
        </div>
       
    </div>




}
export default UpdateExperts