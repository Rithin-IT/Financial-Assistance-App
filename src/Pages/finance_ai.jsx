import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";




function Finance_ai() {
  

 
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const cx = "84c171dacf1aa43c1"
  const apiKey = "AIzaSyBzB9VS7Jcpv4gQbmgZevToxvucbs7UtcY"

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
    personal_details: {
      name: "R.Manjula",
      dob: "24-05-1998",
      father_name: "E.Rajkumar",
      mother_name: "R.chitradevi",
      email: "manjurajkumar98@gmail.com",
      gender: "female",
      current_working_company: "dodvjsd",
      salary: "₹50000",


      work_experience: "5 Years",
      working_hours: "8 hours",
      working_shift: "day shift",
      marital_status: "yes",
      monthly_expense: "₹30000",
      monthly_savings: "₹20000",
      yearlySalaryHike: "₹5000",
      assets: "₹500000",
      spouseName: "sdfg",
      spouseWorkingCompany: "google",
      spouseSalary: "₹30000",



    },
    education: [
      {
        course_name: "sslc",
        course_institute: "vgs",
        course_year: 2013,
        course_percentage: 88
      },
      {
        course_name: "hsc",
        course_institute: "vgs",
        course_year: 2015,
        course_percentage: 89
      },
      {
        course_name: "B.E",
        course_institute: "Fx engineering college",
        course_year: 2019,
        course_percentage: 74
      }
    ],
    skills: ["java", "phyton", "html", "css", "react", "redux", "bootstrap"],
    languages_known: ["tamil", "english"],    goals: "Build a new house with budget of 30Lakhs and to reduce loan amount"
  }

  //   async function run() {
  const run = async () => {
    setLoading(true);
    const prompt = `
       Based on the name, monthly_savings, monthly_expense, salary, assets and goals 
        What are the steps should I take to reach that goal?
        1.Format the output with  proper HTML5 structure for better semantics and accessibility.
        2. Uses Bootstrap classes for consistent styling and responsiveness 
        (e.g., 'container', 'goal-card', 'section-heading').
        3.Includes custom CSS to enhance visual appeal, improve readability, and highlight key information. 
        The '.key-info' class and color scheme make important numbers stand out.
        4.Break down the plan into multiple phases with clear section headings.
        5.Add tooltips for additional explanations on key terms.
        6.Provide a disclaimer regarding financial advice and the importance of consulting a professional.
        7. Output needs to look good like real time web application.
        8. Output response will be HTML format only and avoid text which are placed outside HTML
        
       
        
       ${JSON.stringify(details)}`;
       const result = await model.generateContent(prompt);
       console.log("Summary Response:", result.response.text());       
       const responseText = result.response.text();
        
    setSummary(responseText);
    setLoading(false);
    
  }
return <div>
  <Button variant="success" onClick={run} disabled={loading}>
  {loading ? (
          <>
            <Spinner animation="border" size="sm" /> Generating...
          </>
        ) : (
          "Generate Tips"
        )}
    
  </Button>  
  <div dangerouslySetInnerHTML={{ __html: summary }} className="mt-3" />

</div>
}
export default Finance_ai;




  




   

     

 









