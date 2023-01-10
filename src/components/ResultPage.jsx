import React, { useState } from 'react';
import axios from 'axios';
import {useEffect} from 'react'

export default function ResultPage(props){
   const [res,setRes]=useState("")
    useEffect(()=>{


   
    
        axios.get( "https://api.openweathermap.org/data/2.5/weather?q=" + props.cityName + "&appid=" + "aac0e38a5a3c567cd3e79a723bf39fc3")
            .then((response) => {
                console.log(response)
                setRes(response)
                console.log(res)
            })
            .catch((err) =>{
                console.log(err)
            })
    },
    []
    )
    return (
        <div>
            <h1>This is the Result Page</h1>
        </div>
    );
}
