import React, { useEffect, useState } from "react";
import './Greeting.css';

function Greetings()
{
    const [error,setError]=useState('');
    const hour = new Date().getHours();
    const welcomeTypes = ["Good Morning", "Good Afternoon", "Good Evening"];
    let welcomeText = "";

    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 16) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];

    
    return(
        <div className="form">
            <h2>{welcomeText} .</h2>
            <h2>Hope you're doing great. Let's get calories !</h2>
        </div>
    )
}
export default Greetings