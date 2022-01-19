const forecastReducer = (state=[], actions) => {
    switch (actions.type) {
        case 'addForecast':
            return [state];
    
        default:
            return [];
    }
}

export default forecastReducer
