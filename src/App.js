import { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import TodayWeatherSummary from './components/TodayWeatherSummary';
import WeatherForecastDetails from './components/WeatherForecastDetails';


function App() {

  


  useEffect(() => {
    const fetchWeatherData = async () => {

      const response = await fetch(process.env.REACT_APP_WEATHER_URL);

      const data = await response.json();

      console.log(data);
    }

    fetchWeatherData();

  }, [])

  return (
    <Grid container>
      <TodayWeatherSummary/>
      <WeatherForecastDetails/>
    </Grid>
  );
}

export default App;
