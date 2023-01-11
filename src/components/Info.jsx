import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import "./info.css"
export default function Info(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
        //   height: 300,
          margin:"20px auto 0 auto",
          padding: "0 20px 20px 20px"
        },
      }}
    >
        <Paper className="weather" elevation={9}>
            <div className='top'>
                <div>
                    <p className='city-name'>{props.response.name}</p>
                    <p className='weather-description'>{props.response.weather[0].description}</p>
                </div>
                <img alt="weather" className='weather-icon' src={`icons/${props.response.weather[0].icon}.png`}/>
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(props.response.main.temp - 273)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{props.response.main.feels_like}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{props.response.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{props.response.main.humidity}%</span>
                    </div>                    
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{props.response.main.pressure} hPa</span>
                    </div>      
                </div> 

            </div>
        </Paper>
    </Box>
  );
}