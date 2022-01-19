export const addweatherForecast = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'addForecast',
            payload: item
        });
    }
}