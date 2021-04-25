import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";



export const Home = () => {

    let history = useHistory();

    const ButtonHandler = () => {
      history.push('/users')
    }
    return (
        <div>
        <h1> CLICK HERE TO VIEW CONTACTS</h1>
        <Button className="Contact-Button" onClick={ButtonHandler}> CONTACTS </Button>
        </div>
    )
}
export default Home
