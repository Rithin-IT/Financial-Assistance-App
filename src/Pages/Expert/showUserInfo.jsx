import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';




function UserInfo() {

  


  

    let userId = JSON.parse(localStorage.getItem("user"))
    console.log(userId)
    const [userData, setUserData] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getApi = () => {
      axios.get(`https://agaram.academy/api/b4/action.php?request=ai_finance_get_user_profile&user_id=${userId.id}`)
        .then((res) => {
          console.log(res);
          if (res.data.data.data) {
            const getData = JSON.parse(res.data.data.data);

            setInputValue(getData);
          }
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

                </thead>

                <tbody style={{ borderBottom: "5px solid teal" }}>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding:"10px"}}>Father Name</td>
                  <td>{userData.fatherName}</td>
                </tr>
                  
          
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  export default UserInfo