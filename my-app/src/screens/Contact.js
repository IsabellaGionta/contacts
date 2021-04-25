import React from 'react';
import '../App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import call from '../images/call.jpg';
import { useHistory } from "react-router-dom";



export const Contacts = () => {

    let history = useHistory();


    const ImgHandler = () => {
        history.push('/user1')

    }
    return (
        <div>
            <h1> Contact </h1>
            <img className="call" src={call} alt="call" onClick={ImgHandler} />
        </div>
    )
}
export default Contacts
