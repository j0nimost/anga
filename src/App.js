import { useEffect, useState } from 'react';
import { actionCreators } from './state';
import {bindActionCreators} from 'redux';
import { useDispatch } from 'react-redux';
import {Grid, Backdrop, CircularProgress} from '@mui/material';
import TodayWeatherSummary from './components/TodayWeatherSummary';
import WeatherForecastDetails from './components/WeatherForecastDetails';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [iconUrl, setIconUrl] = useState('64x64'); // just set anything borake the rest of the window shows and not an error
  const [searchPlace, setsearchPlace] = useState('Nairobi');
  const [isdegreeCelcius, setisdegreeCelcius] = useState(true);

  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  
  useEffect(() => {


    const fetchWeatherData = async () => {


      let sunrise, sunset;

      const response = await fetch(process.env.REACT_APP_WEATHER_URL + searchPlace.trim() + '&days=6&aqi=yes&alerts=no', {mode:'cors'});

      const data = response ? await response.json() : {};

      if(Object.keys(data).length !== 0)
      {
        
        let dateObj = new Date(data.location.localtime);
        const date = dateObj.getFullYear() + '-' + dateObj.getMonth() + '-' + dateObj.getDate();

        const hour = parseInt(dateObj.getHours());


        const {addweatherForecast, addWeekForecast, addCurrentWeather, addLocation, addSunriseandSunset} = actions;


        
        setIconUrl(data.current.condition.icon);
        ({sunrise, sunset}= data.forecast.forecastday[0].astro);
  
        addLocation(data.location);
        
        addCurrentWeather(data.current);
        addweatherForecast(data.forecast.forecastday[0])// needs a unique filter by hours from current time
        addWeekForecast(data.forecast.forecastday)
        addSunriseandSunset([sunrise, sunset]);

        
        /// last call
        setIsLoading(false);
      }

    }

    fetchWeatherData();
    

  }, [searchPlace]);

  const handleOnSearch = (e) => {
    if(e.key === 'Enter') {
      setsearchPlace(e.target.value);  
      setIsLoading(true);
    }
  }

  const toggleCelciusOrFarenheit = (e) => {
    setisdegreeCelcius(!isdegreeCelcius);
  }

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
        <TodayWeatherSummary  iconUrl={iconUrl} isdegreeCelcius={isdegreeCelcius} handleOnSearch={handleOnSearch}/>
        <WeatherForecastDetails isdegreeCelcius={isdegreeCelcius} toggleCelciusOrFarenheit={toggleCelciusOrFarenheit}/>
      </Grid>
  }
    </>

  );
}

export default App;
