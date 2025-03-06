import { useState, useEffect, split } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';





function Userinfo() {
  const [inputValue, setInputValue] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const getApi = () => {
    axios.get('https://agaram.academy/api/b4/action.php?request=ai_finance_get_user_profile&user_id=3')
      .then((res) => {
        if (res.data.data.data) {
          const getData = JSON.parse(res.data.data.data);
          setInputValue(getData);
          console.log(getData.education)
        }
      })
  }


  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h5 style={{ textAlign: "center" }}>My Profile</h5>
      <Row>
        <Col sm="5">
          <div style={{ width: "500px", height: "400px" }}>
            <table style={{ borderCollapse: "collapse", margin: "25px 0", minWidth: "80%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black", marginLeft: "100px" }}>
              <thead style={{ backgroundColor: "teal", color: "white", textAlign: "left", fontWeight: "bold", padding: "15px" }}>
                <tr>
                  <th style={{ padding: "10px" }}>Key</th>
                  <th>Value</th>
                </tr>
              </thead>

              <tbody style={{ borderBottom: "5px solid teal" }}>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{}}>Father Name</td>
                  <td style={{ padding: "6px" }}>{inputValue.fatherName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Mother Name</td>
                  <td>{inputValue.motherName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>DoB</td>
                  <td>{inputValue.DoB}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Gender</td>
                  <td>{inputValue.gender}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Marital Status</td>
                  <td>{inputValue.maritalStatus}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Spouse Name</td>
                  <td>{inputValue.spouseName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Spouse Working Company</td>
                  <td>{inputValue.spouseWorkingCompany}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Spouse Yearly Salary</td>
                  <td>{inputValue.spouseYearlySalary}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Children</td>
                  <td>{inputValue.children}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Current Working Company</td>
                  <td>{inputValue.currentWorkingCompany}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Salary</td>
                  <td>{inputValue.salary}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Work Experience</td>
                  <td>{inputValue.workExperience}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Working Hours</td>
                  <td>{inputValue.workHours}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Working Shift</td>
                  <td>{inputValue.workingShift}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Yearly Salary Hike</td>
                  <td>{inputValue.yearlySalaryHike}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "6px" }}>Monthly Expense</td>
                  <td>{inputValue.monthlyExpense}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>

        <Col sm="5">

          <div>
            <table style={{ borderCollapse: "collapse", margin: "25px 0", minWidth: "80%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black", marginLeft: "50px" }}>
              {/* <Col sm="5"> */}
              <thead style={{ backgroundColor: "teal", color: "white", textAlign: "left", fontWeight: "bold", padding: "15px" }}>
                <tr>
                  <th>Course Name</th>
                  <th>Institute Name</th>
                  <th>Year</th>
                  <th>Place</th>
                </tr>
              </thead>
              <tbody>
                {inputValue.education?.map((v) =>
                  <tr>
                    <td>{v.course_name}</td>
                    <td>{v.course_institute}</td>
                    <td>{v.course_year}</td>
                    <td>{v.course_percentage}</td>
                  </tr>
                )}
              </tbody>
              {/* </Col> */}
            </table>
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default Userinfo