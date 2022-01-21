import { combineReducers } from "redux";
import forecastReducer from "./forecastReducer";
import weekForecastReducer from "./weekForecastReducer";
import currentWeatherReducer from "./currentWeatherReducer";
import locationReducer from "./locationReducer";
import sunriseandsunsetReducer from "./sunriseandsunsetReducer";

const reducers = combineReducers({
    forecast: forecastReducer,
    weekForecast: weekForecastReducer,
    current: currentWeatherReducer,
    location: locationReducer,
    sunriseandsunset: sunriseandsunsetReducer,
})

export default reducers
