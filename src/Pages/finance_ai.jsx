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



function Finance_ai() {

  const [summary, setSummary] = useState("");
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
    languages_known: ["tamil", "english"],
    goals: "Build a new house with budget of 30Lakhs and to reduce loan amount"





  }

  //   async function run() {
  const run = async () => {
    const prompt = `
       Based on the name, monthly_savings, monthly_expense, salary, assets and goals 
        What are the steps should I take to reach that goal?
         provide guidance format as HTML within <div> tag with CSS in Resume format
  ${JSON.stringify(details)}`;






    const result = await model.generateContent(prompt);
    console.log("Summary Response:", result.response.text());


    // setSummary(result.response.text().split(/<-C->|<-->|[*]/));
    const responseText = result.response.text();
    setSummary(responseText);
    // const parts = responseText.split(/[*]|<!-->|<-->|<-C->|<!-->|<->/)
  }



  // let formattedSummary = [];



  //   for (let i = 1; i < parts.length; i+=2) {
  //     // const [title,content] = parts;
  //     // const content = parts;
  //     // if(title && content){
  //       if (parts[i + 1]) {
  //       formattedSummary.push({
  //         title: parts[i].trim(),
  //         content: parts[i + 1].trim()
  //       });
  //     }

  //   }

  //   setSummary(formattedSummary);


  //   } 



  return <div>
  <Button variant="primary" onClick={run}>
    Generate Tips
  </Button>
  <div dangerouslySetInnerHTML={{ __html: summary }} />

</div>

}
export default Finance_ai;









