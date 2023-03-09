import logo from './logo.svg';
import './App.css';
import { useState } from "react";

//using react-router's built in context provider
// that makes the context accessible to all child routes across the application
import { Outlet } from "react-router-dom";

import NavBar  from './Components/NavBar';

function App() {

  const [signupList, setSignupList] = useState([]);

  //handle sign up
  const handleAddSignUp = (firstName, lastName, email) => {
    const newSignup = {
      firstName, 
      lastName,
      email
    }
    setSignupList([...signupList, newSignup]);
  }

  return (
    <div className="App-header">
       <NavBar />
       <Outlet context={[signupList, handleAddSignUp]}/>
    </div>
  );
}

export default App;
