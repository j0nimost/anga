const currentWeatherReducer = (state={}, actions) => {
  switch (actions.type) {
      case 'addCurrentWeather':
          return actions.payload
  
      default:
          return {}
  }
};

export default currentWeatherReducer;
