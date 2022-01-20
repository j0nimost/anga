const weekForecastReducer = (state =[], actions) => {
    switch (actions.type) {
        case 'addWeekForecast':
            return [...actions.payload.slice(0,6)]
    
        default:
            return [state];
    }
}   

export default weekForecastReducer