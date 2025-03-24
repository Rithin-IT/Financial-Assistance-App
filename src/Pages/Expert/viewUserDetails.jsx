import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';



function ViewUserDetails() {

    let userId = JSON.parse(localStorage.getItem("user"))

    const [inputValue, setInputValue] = useState({
        name:"",
        email:"",
        DOB: "",    
        currentWorkingCompany: "",
        salary: "",
        monthlyExpense: "",
        monthlySaving: "",
        skills: [],
        goals: [],
        budget_of_all_goals: []
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();


       const getApi = () => {
       axios.get(`https://agaram.academy/api/b4/action.php?request=ai_finance_view_expert_users&expert_id=${userId.id}`)
           .then((res) => {
              let getData = res.data.data.data
              setInputValue(JSON.parse(getData))
           })
       }


       useEffect(() => {
         getApi();
       }, []);




    return (
        <div>
            <Row>
                <Col sm="10">
                    <div style={{ width: "100%", height: "100%" }}>
                        <h4 style={{ textAlign: "center" }}>Requested User Details</h4>
                        <table style={{ borderCollapse: "collapse", marginLeft: "120px", minWidth: "100%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black", marginTop: "25px" }}>
                            <thead style={{ backgroundColor: "teal", color: "white", textAlign: "center", fontWeight: "bold", padding: "15px" }}>
                                <tr>
                                    <th style={{ padding: "10px" }}>Name</th>
                                    <th>Email</th>
                                    <th>DOB</th>
                                    <th>Current working company</th>
                                    <th>Salary</th>
                                    <th>Monthly Expense</th>
                                    <th>Monthly Savings</th>
                                    <th>Skills</th>
                                    <th>Goals</th>
                                    <th>Budget of all goals </th>
                                </tr>
                            </thead>

                            <tbody style={{ borderBottom: "3px solid teal" }}>
                                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                                    <td>{inputValue.name}</td>
                                    <td>{inputValue.email}</td>
                                    <td>{inputValue.DOB}</td>
                                    <td>{inputValue.currentWorkingCompany}</td>
                                    <td>{inputValue.salary}</td>
                                    <td>{inputValue.monthlyExpense}</td>
                                    <td>{inputValue.monthlySaving}</td>
                                    <td>{inputValue.skills?.map((value) => <li>{value}</li>)}</td>
                                    <td>{inputValue.goals?.map((v) => <li>{v}</li>)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </div>

    );
}


export default ViewUserDetails