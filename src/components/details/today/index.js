import React from 'react'
import WeatherByTheHourList from './WeatherByTheHourList'

const index = ({isdegreeCelcius}) => {
    return (
        <>          
            <WeatherByTheHourList isdegreeCelcius={isdegreeCelcius}/>
        </>
    )
}

export default index
