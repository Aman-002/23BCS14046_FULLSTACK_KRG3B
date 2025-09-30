import logo from './logo.svg';
import React from "react"
import './App.css';
import Card from './components/card';
import { useState, useEffect } from 'react';
import axios from "axios"
function App() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [pass, setPass]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(pass);
  }
  return (
    <>
    <form className='form-container' onSubmit={handleSubmit}>
      <h1>Form</h1>
      <input className='form' placeholder='enter your Name' onChange={(e)=>{setName(e.target.value)}}></input>
      <br></br>
      <input className='form' placeholder='enter your Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
      <br></br>
      <input className='form' placeholder='enter your Password' onChange={(e)=>{setPass(e.target.value)}}></input>
      <br></br>
      <button className='button'>Submit</button>
    </form>
    </>
  )
}

export default App;
