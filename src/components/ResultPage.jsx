import React, { useState } from 'react';
import axios from 'axios';
import {useEffect} from 'react'

export default function ResultPage(props){
   const [res,setRes]=useState("None")
    useEffect(()=>{


   
    
        axios.get( "https://api.openweathermap.org/data/2.5/weather?q=" + props.cityName + "&appid=" + "aac0e38a5a3c567cd3e79a723bf39fc3")
            .then((response) => {
                setRes(response["data"])
                console.log(response["data"])
            })
            .catch((err) =>{
                console.log(err)
            })
    },
    []
    )
    return (
        <div>
            {/* <h1>This is the Result Page</h1> */}
            {/* {/* <p>City:{res["name"]}</p> */}
            {/* <p>Visibility:{res["visibility"]}</p> */}
            {/* <p>Temperature:{res["main"]["temp"]}</p> */}
            {/* <p>Max Temperature:{res["main"]["temp_max"]}</p>
            <p>Feels like:{res["main"]["feels_like"]}</p> */}
        </div>
    );
}