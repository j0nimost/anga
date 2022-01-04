import { useEffect, useState } from 'react';

import {Grid, Backdrop, CircularProgress} from '@mui/material';
import TodayWeatherSummary from './components/TodayWeatherSummary';
import WeatherForecastDetails from './components/WeatherForecastDetails';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [todaysForecast, setTodaysForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [currentSunrise, setCurrentSunrise] = useState({});
  const [currentSunset, setCurrentSunset] = useState({});
  const [iconUrl, setIconUrl] = useState('64x64'); // just set anything borake the rest of the window shows and not an error
  const [locationDetails, setlocationDetails] = useState({});

  useEffect(() => {

    let dateObj = new Date();
    const date = dateObj.getFullYear() + '-' + dateObj.getMonth() + '-' + dateObj.getDate();

    const hour = parseInt(dateObj.getHours());

    const fetchWeatherData = async () => {

      let sunrise, sunset;

      const response = await fetch(process.env.REACT_APP_WEATHER_URL, {mode:'cors'});

      const data = response ? await response.json() : {};

      if(Object.keys(data).length !== 0)
      {
        
        setIconUrl(data.current.condition.icon);
        ({sunrise, sunset}= data.forecast.forecastday[0].astro);
  
        setlocationDetails(data.location)
        
        setCurrentWeather(data.current);
        setTodaysForecast(data.forecast.forecastday[0].hour.slice(hour, hour+6)); // needs a unique filter by hours from current time
        setWeekForecast(data.forecast.forecastday.slice(0,6));
        setCurrentSunrise(sunrise);
        setCurrentSunset(sunset);

        


        /// last call
        setIsLoading(false);
      }

    }

    fetchWeatherData();

  }, []);

  console.log(locationDetails);
  return (
    <>
    {
      isLoading ?
        <div>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      :
      <Grid container>
        <TodayWeatherSummary currentWeather={currentWeather} iconUrl={iconUrl} locationDetails={locationDetails}/>
        <WeatherForecastDetails currentWeather={currentWeather} todaysForecast={todaysForecast} weekForecast={weekForecast} sunrise={currentSunrise} sunset={currentSunset}/>
      </Grid>
  }
    </>

  );
}

export default App;
