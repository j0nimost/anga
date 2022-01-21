const forecastReducer = (state=[], actions) => {
    switch (actions.type) {
        case 'addForecast':
            let dateObj = new Date(actions.payload.location.localtime);
            const hour = parseInt(dateObj.getHours());
            return [...actions.payload.hour.slice(hour, hour+6)];
    
        default:
            return [];
    }
}

export default forecastReducer
