import React, {useState, useEffect} from "react";
import './AddRecord.css';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import firebaseConfig from "./config";

function AddRecord(){
    const [query,setQuery]=useState('')
    const [select, setSelect]=useState('nutrients')
    const [error,setError]=useState('')
    const [activity,setActivity]=useState({})

    function queryHandler(e)
    {
        setQuery(e.target.value)
    }
    function handleSelectChange(e)
    {
        setSelect(e.target.value)
    }
    const addFood = (food)=>{
            setActivity({
                name:food.serving_qty+" "+food.serving_unit+" "+food.food_name,
                timestamp:Date.now(),
                calories:1*(food.nf_calories),
                imageUrl:food.photo.highres
            })
    }

    const addExercise = (exercise)=>{
        setActivity({
                name:exercise.duration_min+" minutes of "+ exercise.user_input,
                timestamp:Date.now(),
                calories:-1*(exercise.nf_calories),
                imageUrl:exercise.photo.highres
            })
    }
    function submitHandler(e)
    {
        setError('')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' , 'x-app-id':'56ca1303','x-app-key':'792b8a7c034a7191f67fb45b5836e45e' },
            body: JSON.stringify({ query: query })
        };
        fetch('https://trackapi.nutritionix.com/v2/natural/'+select, requestOptions)
        .then(response => response.json())
        .then(data => {
                if(data.foods)
                {
                    addFood(data.foods[0])
                }
                else if(data.exercises)
                {
                    addExercise(data.exercises[0])
                }
        })
        .catch(error=>
            {
                    console.log(error)
                    setError('Something went wrong ! ')
            })
        setQuery('')
    }
    return(
        <div>
        <div className="form">
        {error && <p className="error">{error}</p>}
        <textarea placeholder="Add You're Hogs and Jogs Here !" value={query} onChange={queryHandler}></textarea>
        <select value={select} onChange={handleSelectChange}> 
        <option value="nutrients">Food</option>
        <option value="exercise">Exercise</option>
        </select>
        <button className="add" onClick={submitHandler}>Search Calories</button>
        </div>
        {(activity.name)?(
        <div className="form">
        {(activity.imageUrl!=='')?<img className="activity" src={activity.imageUrl}/>:<img src="https://source.unsplash.com/1600x1600/?food"/>}
        {activity.calories<0?<h1 className="loss">{activity.calories} kcal</h1>:<h1 className="gain">{activity.calories} kcal</h1>}
        <h2>{activity.name}</h2>
        <h2>{new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour: '2-digit', minute: '2-digit'}).format(activity.timestamp)}</h2>
        </div>):(<div/>)}
        </div>
    )
}
export default AddRecord