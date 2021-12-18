import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles";
import WeatherByTheHour from "./WeatherByTheHour"


const todayWeatherForeCast = [

    {hour: '10:00', high: 23, low: 17},
    {hour: '11:00', high: 24, low: 18},
    {hour: '12:00', high: 24, low: 18},
    {hour: '13:00', high: 25, low: 19},
    {hour: '14:00', high: 25, low: 20},
    {hour: '15:00', high: 24, low: 20},
];

const useStyle = makeStyles({
    gridContainer: {
        marginTop: 3.5,
        marginBottom: 20,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
})

const WeatherByTheHourList = () => {
    const classes = useStyle();
    return (
        <Grid container spacing={2} className={classes.gridContainer}>
            {todayWeatherForeCast.map((foreCast, index) => {
                return <WeatherByTheHour forecast={foreCast} key={index}/>
            })}
        </Grid>
    )
}

export default WeatherByTheHourList
