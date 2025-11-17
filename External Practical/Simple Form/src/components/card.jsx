import logo from '../../src/logo.svg';
import React from "react";

const card = (props) => {
    const {key,student,course}=props;
    return (
    <div className='card'>
        <img src={logo} className="card-img" alt="logo" />
        <p className='card-title'>{student}</p>
        <p className='card-text'>{course}</p>
    </div>
    );
};
export default card;