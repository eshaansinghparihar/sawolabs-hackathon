import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore ,doc, onSnapshot} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import firebaseConfig from './config';
import Loading from "./Loading";
import Greetings from "./Greeting";
import AddRecord from "./AddRecord";
import Activities from "./Activities";

export default function Landing()
{
    const [data,setData]=useState({});
    
    return(
                <div>
                {/* <ToastContainer
                position="top-left"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                /> */}
                <Greetings/>
                <AddRecord/>
                </div>
            

    )
}