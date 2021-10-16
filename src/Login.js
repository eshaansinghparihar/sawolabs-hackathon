import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import logo from './assets/logo.png';
import Sawo from "sawo";
const API_KEY = process.env.REACT_APP_API_KEY;

function Login({login, notifyLogin})
{
    const [payload, setPayload] = useState({});

    useEffect(() => {
    var config = {
        containerID: "sawo-container",
        identifierType: "email",
        apiKey: API_KEY,
        onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        login()
        setPayload(payload);
        notifyLogin();
        },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
    }, []); 
return(
        <div className="containerStyle">
      <section>
        <h2 className="title">Login</h2>
        <div className="formContainer" id="sawo-container"></div>
      </section>
    </div>
)
}
export default Login