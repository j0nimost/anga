export const addweatherForecast = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'addForecast',
            payload: item
        });
    }
}

export const addWeekForecast = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'addWeekForecast',
            payload: item
        })
    }
}

export const addLocation = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'addLocation',
            payload: item
        })
    }
}

export const addCurrentWeather = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'addCurrentWeather',
            payload: item
        })
    }
}

export const addSunriseandSunset = (item) => {
    return(dispatch) => {
        dispatch({
            type: 'addSunriseandSunset',
            payload: item
        })
    }
}
