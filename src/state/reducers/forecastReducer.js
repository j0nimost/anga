const forecastReducer = (state=[], actions) => {
    switch (actions.type) {
        case 'addForecast':
            let dateObj;
            if(actions.payload.location === undefined)
            {
                dateObj = new Date();
            }
            else
            {
                
                const {localtime} = actions.payload.location;
                dateObj = new Date(localtime);
            }

            const hour = parseInt(dateObj.getHours());
            return [...actions.payload.hour.slice(hour, hour+6)];
    
        default:
            return state;
    }
}

export default forecastReducer
