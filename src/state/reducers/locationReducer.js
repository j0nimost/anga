const locationReducer = (state={}, actions) => {
  switch (actions.type) {
      case 'addLocation':
          return actions.payload;
  
      default:
          return state;
  }
};

export default locationReducer;
