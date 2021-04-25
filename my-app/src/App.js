import logo from './logo.svg';
import './App.css';
import Contacts from './screens/Contacts.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Home from './screens/Home.js';
import User from './screens/User.js'

function App() {


  return (
    <div className="App"> 


    <Router>
      <Switch>

      <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/users">
          <Contacts />
        </Route>

        <Route path="/user1">
          <User />
        </Route>
      
      </Switch>
    </Router>


    </div>
  );
}

export default App;
