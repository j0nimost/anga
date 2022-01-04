import React from 'react'
import WeatherByTheHourList from './WeatherByTheHourList'

const index = ({ todaysForecast}) => {
    return (
        <>          
            <WeatherByTheHourList  todaysForecast={todaysForecast}/>
        </>
    )
}

export default index
