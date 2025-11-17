import React from 'react';
import { useState } from 'react';
import axios from "axios"
export default function App() {
  const [title, setTitle]=useState("");
  const [body, setBody]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    const resp = axios.post("/posts",{title, body});
    console.alert("Form submitted successfully!" + resp);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>My Form</h1>
      <input placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}></input>
      <br></br>
      <textarea placeholder='Body' onChange={(e)=>{setBody(e.target.value)}}></textarea>
      <br></br>
      <button >Submit</button>
    </form>
    </>
  )
}
