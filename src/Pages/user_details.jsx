import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";



function UserDetails(){
    const cx = "84c171dacf1aa43c1"
    const apiKey="AIzaSyBzB9VS7Jcpv4gQbmgZevToxvucbs7UtcY"
   
      const genAI = new GoogleGenerativeAI(apiKey);
      
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
      });
      
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      const details = {
        personal_details:{
          name:"R.Manjula",
          dob:"24-05-1998",
          father_name:"E.Rajkumar",
          mother_name:"R.chitradevi",
          email:"manjurajkumar98@gmail.com",
          gender:"female",
          current_working_company: "dodvjsd",
          salary:"50k",
          work_experience:"5 Years",
          working_hours: "8 hours",
          working_shift: "day shift",
          marital_status:"yes",
          monthly_expense:"30k"
    
          
        },
        education:[
          {
          course_name:"sslc",
          course_institute:"vgs",
          course_year:2013,
          course_percentage:88
        },
        {
          course_name:"hsc",
          course_institute:"vgs",
          course_year:2015,
          course_percentage:89
        },
        {
          course_name:"B.E",
          course_institute:"Fx engineering college",
          course_year:2019,
          course_percentage:74
        }
      ],
      skills:["java","phyton","html","css","react","redux","bootstrap"],
      languages_known:["tamil","english"],
      goals:["to build a new house",
        "to reduce loan amount",
      "to buy new vechicle",
      "to buy land",
      "to buy gold jewels",
      "after retirement, what i should do"
    ]
    
        
    
      }

      async function run() {
        const prompt = `Make a summary of the following JSON details: ${JSON.stringify(details)}`;
       
      const result = await model.generateContent(prompt);
      console.log("Summary Response:", result.response.text());
     
      }

      useEffect(() => {
        
        run();
    }, [])


    return (
        <div className="container">
          <h2>User Details Summary</h2>
         
        </div>
      );
    }

    export default UserDetails;
    













//     const [inputValue, setInputValue] = useState({})
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
   

   

// const getApi = () => {
//     axios.get('https://agaram.academy/api/b4/action.php?request=ai_finance_get_user_profile&user_id=3')
//         .then((res) => {
//             if (res.data.data.data) {
//                 const getData = JSON.parse(res.data.data.data);
//                 console.log(getData);
//                 setInputValue(getData);
//               }
//             })
// }

// useEffect(() => {
//     getApi();
//   }, []);
  
//   return (
//     <div>
//       <h3>User Details</h3>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Key</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         <tbody>
          
//           <th></th>
                

         
            
          
//         </tbody>
//       </Table>
//     </div>
//   );