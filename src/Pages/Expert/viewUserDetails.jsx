import { useState, useEffect, split } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col } from 'react-bootstrap';
import {  useDispatch } from 'react-redux'; ``
import { useNavigate } from 'react-router';
import axios from 'axios';

function ViewUserDetails() {


  const [inputValue, setInputValue] = useState({
    Name: "",
    Email: "",
    DoB: "",
    currentWorkingCompany: "",
    salary: "",
    monthlyExpense: "",
    monthlySavings: "",
    skills: [],
    goals: []
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const getApi = () => {
    axios.get('https://agaram.academy/api/b4/action.php?request=ai_finance_view_expert_users&expert_id=1')
      .then((res) => {

        const getData = res.data.data;
        setInputValue(getData);
        console.log(getData)

      })
  }


  useEffect(() => {
    getApi();
  }, []);


  return <div>
    <h5 style={{ textAlign: "center" }}>ViewUserDetails</h5>

    <div>
      <Row>
        <Col sm="10">
          <div style={{ minwidth: "100%", height: "600px" }}>
            <table style={{ borderCollapse: "collapse", marginLeft: "90px", minWidth: "100%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black", marginTop: "50px" ,border:"1px solid burlywood"}}>
              <thead style={{ backgroundColor: "burlywood", color: "white", textAlign: "center", fontWeight: "bold", padding: "15px" }}>
                <tr>
                  <th style={{ padding: "10px" }}>Name</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Current Working Company</th>
                  <th>salary</th>
                  <th>Monthly Expense</th>
                  <th>Monthly Savings</th>
                  <th>Skills</th>
                  <th>Goals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px" }}>{inputValue.Name}</td>
                  <td>{inputValue.Email}</td>
                  <td>{inputValue.DoB}</td>
                  <td>{inputValue.currentWorkingCompany}</td>
                  <td>{inputValue.salary}</td>
                  <td>{inputValue.monthlyExpense}</td>
                  <td>{inputValue.monthlySavings}</td>
                  <td>{inputValue.skills?.map((value) => <li>{value}</li>)}</td>
                  <td>{inputValue.goals?.map((v) => <li>{v}</li>)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  </div>
}

export default ViewUserDetails



