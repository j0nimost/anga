const sunriseandsunsetReducer = (state={}, actions) => {
  switch (actions.type) {
      case 'addSunriseandSunset':
          return {
              sunrise: actions.payload[0],
              sunset: actions.payload[1]
          }
  
      default:
          return {}
  }
};

export default sunriseandsunsetReducer;
