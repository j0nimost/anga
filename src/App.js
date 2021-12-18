import Grid from '@mui/material/Grid';
import TodayWeatherSummary from './components/TodayWeatherSummary';
import WeatherForecastDetails from './components/WeatherForecastDetails';

function App() {
  return (
    <Grid container>
      <TodayWeatherSummary/>
      <WeatherForecastDetails/>
    </Grid>
  );
}

export default App;
