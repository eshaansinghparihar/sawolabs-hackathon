import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png'
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Landing from './Landing';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Sawo from "sawo";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

    // useEffect(() => {
    // var config = {
    //     containerID: "sawo-container",
    //     identifierType: "email",
    //     apiKey: API_KEY,
    //     onSuccess: (payload) => {
    //     console.log("Payload : " + JSON.stringify(payload));
    //     },
    // };
    // let sawo = new Sawo(config);
    // sawo.showForm();
    // }, []);
    function login(){
      setUserLoggedIn(true);
    }
    const notifyLogin=()=>
    {
        toast.success('Login Successfull !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          }
  return (
    <BrowserRouter>
    <div className="App">
    {isUserLoggedIn?
        <Switch>
        <Route path='/' >
        <ToastContainer
                    position="top-left"
                    autoClose={1500}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
        <Landing/>
        </Route>
        <Redirect to="/" />
        </Switch>
    :
    <Switch>
    <Route exact path="/signup" >
    <Signup/>
    </Route>        
    <Route path='/'>
    <Login login={login} notifyLogin={notifyLogin}/>
    </Route>
    <Redirect to="/" />
    </Switch>
    }
    </div>
    </BrowserRouter>
  );
}

export default App;
