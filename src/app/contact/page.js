"use client";

import React from 'react';
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./contactstyles.css";

const page = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    

    const handlechange =(e)=>{
        if(e.target.name=="name"){
            setname(e.target.value);
        }
        else if(e.target.name=="email"){
            setemail(e.target.value);
        }
    }
    const handlesubmit =async (e)=>{
        setname("");
        setemail("");
        e.preventDefault();
        console.log(`name:${name} email:${email}`)
        const data={"name":name,"email":email}
        try {
            const response = await fetch("http://localhost:3000/api/contact", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
        
            const result = await response.json();
            console.log("Success:", result);
          } catch (error) {
            console.error("Error:", error);
          };
       
    }
  return (
    
    <div className="main flex flex-col align-center justify-center">

    
    <h1>Contact Us</h1>
    <h2>Fill your details here..</h2>
    <div className="form_container m-15">
    <form onSubmit={handlesubmit}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Name
    </label>
    <input 
    name='name'
    onChange={handlechange}
      type="name"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
    name='email'
    onChange={handlechange}
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>
</div>
  )
}

export default page