const currentWeatherReducer = (state={}, actions) => {
  switch (actions.type) {
      case 'addCurrentWeather':
          state = actions.payload;
          return state;
  
      default:
          return state
  }
};

export default currentWeatherReducer;
