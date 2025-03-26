import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';




function ViewUserDetails() {

    let expertId = JSON.parse(localStorage.getItem("users"));




    const [userData, setUserData] = useState([]);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getApi = () => {

        axios.get(`https://agaram.academy/api/b4/action.php?request=ai_finance_view_expert_users&expert_id=${expertId.id}`)
            .then((res) => {
                if (res.data.data) {
                    let getData = res.data.data
                let val = getData.map((v) => JSON.parse(v.data))
                console.log(val);
                setUserData(val)
                
                }
                
                

              



            })
    }



    useEffect(() => {
        getApi();
    }, []);

console.log(userData)


    return (
        <div>
            <Row>
                <Col sm="10">
                    <div style={{ width: "100%", height: "100%" }}>
                        <h4 style={{ textAlign: "center" }}>Requested User Details</h4>
                        <table style={{ borderCollapse:"collapse", marginLeft: "120px", minWidth: "100%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black", marginTop: "25px" }}>
                            <thead style={{ backgroundColor: "teal", color: "white", textAlign: "center", fontWeight: "bold", padding: "15px" }}>
                                <tr>
                                    <th style={{ padding: "10px" }}>Name</th>
                                    <th>Email</th>
                                    <th>DOB</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody style={{ borderBottom: "3px solid teal" ,textAlign:"center"}}>

                                {userData.map((user) => (
                                    <tr >
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.DoB}</td>
                                        <td><button style={{backgroundColor:"teal", border:"none", borderRadius:"5px", padding:"5px"}}>View more</button></td>                        
                                    </tr>
                                ))
                            }
                            
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ViewUserDetails;