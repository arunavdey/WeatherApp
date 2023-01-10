import React from 'react';
import axios from 'axios';
import {useEffect} from 'react'

export default function ResultPage(props){
   
    useEffect(()=>{


   
    
        axios.get( "https://api.openweathermap.org/data/2.5/weather?q=" + "bengaluru" + "&appid=" + "aac0e38a5a3c567cd3e79a723bf39fc3")
            .then((response) => {
                console.log(response)
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